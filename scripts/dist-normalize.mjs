// Canonical forms of built pages, so a restructure can be checked for
// unintended output changes. What is ignored: Astro's per-component scope
// markers (data-astro-cid-*, astro-xxxxxxxx classes), hashed asset names,
// attribute order, entity spelling and whitespace runs. Everything else
// (tags, attributes, text) is kept, so a lost <br> or a changed href shows.
import { parse, NodeType } from 'node-html-parser';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const ASSET_HASH = /\/_astro\/([\w-]+?)\.[\w-]{4,}\.(\w+)/g;
const SCOPE_ATTR = /data-astro-cid-[a-z0-9]+/g;
const SCOPE_CLASS = /^astro-[a-z0-9]{8}$/;

// Only ASCII whitespace collapses: a non-breaking space is content.
function cleanValue(value) {
  return value.replace(ASSET_HASH, '/_astro/$1.$2').replace(/[ \t\r\n]+/g, ' ').trim();
}

// Text keeps a single space at its edges: "Hello <b>" and "Hello<b>" differ.
function cleanText(value) {
  return value.replace(ASSET_HASH, '/_astro/$1.$2').replace(/[ \t\r\n]+/g, ' ');
}

const INLINE = new Set(['a', 'abbr', 'b', 'br', 'code', 'em', 'i', 'img', 'kbd', 'mark', 'q', 's', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'svg']);
const isInline = (n) => !n || n.nodeType === NodeType.TEXT_NODE || INLINE.has(n.rawTagName?.toLowerCase());

function serialize(node, depth, out) {
  const pad = '  '.repeat(depth);
  if (node.nodeType === NodeType.TEXT_NODE) {
    // A whitespace-only node renders only between two inline neighbours.
    if (!/[^ \t\r\n]/.test(node.text)) {
      const siblings = node.parentNode?.childNodes ?? [];
      const i = siblings.indexOf(node);
      const prev = siblings[i - 1];
      const next = siblings[i + 1];
      if (!prev || !next || !isInline(prev) || !isInline(next)) return;
    }
    const text = cleanText(node.text);
    if (text) out.push(pad + JSON.stringify(text));
    return;
  }
  if (node.nodeType !== NodeType.ELEMENT_NODE) return;
  const tag = node.rawTagName?.toLowerCase();
  // Styles are compared site-wide (see diffDist), so where they sit doesn't count.
  if (tag === 'style') return;
  if (tag === 'link' && node.getAttribute('rel') === 'stylesheet' && node.getAttribute('href')?.startsWith('/_astro/')) return;
  if (tag) {
    // Scope markers keep their presence (an element that loses one loses its
    // styles) but not their hash, which changes whenever a component moves.
    const attrs = Object.entries(node.attributes)
      .map(([name, value]) => {
        if (name.startsWith('data-astro-cid-')) return 'data-astro-cid';
        if (name === 'class') {
          value = value.split(/\s+/).filter(Boolean).map((c) => (SCOPE_CLASS.test(c) ? 'astro-cid' : c)).join(' ');
          if (!value) return null;
        }
        return `${name}=${JSON.stringify(cleanValue(value))}`;
      })
      .filter(Boolean)
      .sort();
    out.push(`${pad}<${tag}${attrs.length ? ' ' + attrs.join(' ') : ''}>`);
  }
  for (const child of node.childNodes) serialize(child, tag ? depth + 1 : depth, out);
}

/** @param {string} html */
export function normalizeHtml(html) {
  const root = parse(html, { comment: false });
  const out = [];
  serialize(root, 0, out);
  return out.join('\n');
}

/** CSS from every inline <style> block in a page. */
export function extractInlineCss(html) {
  return parse(html, { comment: false })
    .querySelectorAll('style')
    .map((el) => el.text)
    .join('\n');
}

/** @param {string} css */
export function normalizeCss(css) {
  return css
    .replace(SCOPE_ATTR, 'data-astro-cid')
    .replace(ASSET_HASH, '/_astro/$1.$2')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .replace(/}/g, '}\n')
    .trim();
}

function walk(dir, base = dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, base, files);
    else if (/\.(html|css|xml)$/.test(name)) files.push(relative(base, full));
  }
  return files;
}

/** Stable key for a file: CSS bundles are named by hash, so they are keyed by name only. */
function fileKey(path) {
  return path.replace(/^_astro\/([\w-]+?)\.[\w-]{4,}\.css$/, '_astro/$1.css');
}

function normalizeFile(path, content) {
  if (path.endsWith('.html')) return normalizeHtml(content);
  return cleanValue(content.replace(/></g, '>\n<'));
}

function lineDiff(a, b) {
  const al = a.split('\n');
  const bl = b.split('\n');
  const bSet = new Set(bl);
  const aSet = new Set(al);
  const removed = al.filter((l) => !bSet.has(l)).map((l) => '- ' + l);
  const added = bl.filter((l) => !aSet.has(l)).map((l) => '+ ' + l);
  // Same lines in a different order still count as a change.
  if (!removed.length && !added.length && a !== b) return '~ same lines, different order';
  return [...removed, ...added].join('\n');
}

/**
 * Compare two build directories.
 * @returns {{ path: string, diff: string }[]}
 */
export function diffDist(baselineDir, distDir) {
  const collect = (dir) => {
    const map = new Map();
    const css = [];
    for (const path of walk(dir)) {
      const raw = readFileSync(join(dir, path), 'utf8');
      if (path.endsWith('.css')) {
        css.push(raw);
        continue;
      }
      if (path.endsWith('.html')) css.push(extractInlineCss(raw));
      const key = fileKey(path);
      const content = normalizeFile(path, raw);
      map.set(key, map.has(key) ? map.get(key) + '\n' + content : content);
    }
    // Every rule on the site, as a sorted set: placement and order don't matter.
    const rules = [...new Set(css.flatMap((c) => normalizeCss(c).split('\n')).filter(Boolean))].sort();
    map.set('[all css]', rules.join('\n'));
    return map;
  };
  const base = collect(baselineDir);
  const dist = collect(distDir);
  const results = [];
  for (const key of [...new Set([...base.keys(), ...dist.keys()])].sort()) {
    if (!base.has(key)) results.push({ path: key, diff: '+ (new file)' });
    else if (!dist.has(key)) results.push({ path: key, diff: '- (file removed)' });
    else if (base.get(key) !== dist.get(key)) results.push({ path: key, diff: lineDiff(base.get(key), dist.get(key)) });
  }
  return results;
}
