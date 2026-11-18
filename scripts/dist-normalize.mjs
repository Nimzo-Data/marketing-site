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

function cleanValue(value) {
  return value.replace(ASSET_HASH, '/_astro/$1.$2').replace(/\s+/g, ' ').trim();
}

function serialize(node, depth, out) {
  const pad = '  '.repeat(depth);
  if (node.nodeType === NodeType.TEXT_NODE) {
    const text = cleanValue(node.text);
    if (text) out.push(pad + JSON.stringify(text));
    return;
  }
  if (node.nodeType !== NodeType.ELEMENT_NODE) return;
  const tag = node.rawTagName?.toLowerCase();
  if (tag) {
    const attrs = Object.entries(node.attributes)
      .filter(([name]) => !name.startsWith('data-astro-cid-'))
      .map(([name, value]) => {
        if (name === 'class') {
          value = value.split(/\s+/).filter((c) => c && !SCOPE_CLASS.test(c)).join(' ');
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
  if (path.endsWith('.css')) return normalizeCss(content);
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
    for (const path of walk(dir)) {
      const key = fileKey(path);
      const content = normalizeFile(path, readFileSync(join(dir, path), 'utf8'));
      map.set(key, map.has(key) ? map.get(key) + '\n' + content : content);
    }
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
