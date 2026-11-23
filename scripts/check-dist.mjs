// Checks on the built site that type checks can't see: page language, French
// pages linking to English ones, language links that lead nowhere, French
// leaking out before launch, canonicals. Runs after every build (postbuild)
// and exits 1 on any failure. Each check is a pure function over
// { path, html } pages, so it is tested on fixtures (check-dist.test.mjs).
import { parse } from 'node-html-parser';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://nimzodata.com';

const isFrench = (path) => path.startsWith('fr/');

/** "/fr/a-propos/" -> "fr/a-propos/index.html" */
function urlToFile(url) {
  const path = url.replace(SITE, '').split('#')[0].split('?')[0];
  if (/\.\w+$/.test(path)) return path.replace(/^\//, '');
  return (path.replace(/^\//, '') + 'index.html').replace(/^index\.html$/, 'index.html');
}

/** "fr/a-propos/index.html" -> "/fr/a-propos/" */
function fileToUrl(path) {
  return '/' + path.replace(/index\.html$/, '');
}

const cache = new WeakMap();
function dom(page) {
  if (!cache.has(page)) cache.set(page, parse(page.html));
  return cache.get(page);
}

const hreflangs = (page) =>
  dom(page)
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .map((l) => ({ lang: l.getAttribute('hreflang'), href: l.getAttribute('href') }));

const switches = (page) => dom(page).querySelectorAll('a[data-lang-switch]').map((a) => a.getAttribute('href'));

export function checkLang(pages) {
  const issues = [];
  for (const page of pages) {
    const lang = dom(page).querySelector('html')?.getAttribute('lang');
    const expected = isFrench(page.path) ? 'fr' : 'en';
    if (lang !== expected) issues.push(`${page.path}: <html lang="${lang}">, expected "${expected}"`);
  }
  return issues;
}

export function checkFrenchLinks(pages) {
  const issues = [];
  for (const page of pages.filter((p) => isFrench(p.path))) {
    for (const a of dom(page).querySelectorAll('a[href]')) {
      const href = a.getAttribute('href');
      if (!href.startsWith('/') || href.startsWith('/fr/') || href === '/fr') continue;
      if (a.hasAttribute('data-lang-switch')) continue;
      if (href === '/mentions-legales/') continue;
      if (href.startsWith('/_astro/') || /\.\w+$/.test(href.split('#')[0])) continue;
      issues.push(`${page.path}: links to English page ${href}`);
    }
  }
  return issues;
}

export function checkAlternatesResolve(pages, exists) {
  const issues = [];
  const byUrl = new Map(pages.map((p) => [fileToUrl(p.path), p]));
  for (const page of pages) {
    for (const { lang, href } of hreflangs(page)) {
      if (!exists(urlToFile(href))) issues.push(`${page.path}: hreflang="${lang}" points at missing ${href}`);
    }
    for (const href of switches(page)) {
      if (!exists(urlToFile(href))) issues.push(`${page.path}: language switch points at missing ${href}`);
    }
    // Reciprocity: every alternate lists this page back under the same set.
    const own = hreflangs(page).filter((h) => h.lang !== 'x-default');
    for (const { href } of own) {
      const other = byUrl.get(href.replace(SITE, ''));
      if (!other || other === page) continue;
      const back = hreflangs(other).filter((h) => h.lang !== 'x-default');
      const same = own.length === back.length && own.every((h) => back.some((b) => b.lang === h.lang && b.href === h.href));
      if (!same) issues.push(`${page.path}: hreflang set differs on ${other.path}`);
    }
  }
  return issues;
}

export function checkNoFrenchLeak(pages, sitemapXml) {
  const issues = [];
  for (const page of pages) {
    if (hreflangs(page).length) issues.push(`${page.path}: hreflang while French isn't built`);
    if (switches(page).length) issues.push(`${page.path}: language switch while French isn't built`);
    for (const a of dom(page).querySelectorAll('a[href^="/fr"]')) {
      if (!a.hasAttribute('data-lang-switch')) issues.push(`${page.path}: link to ${a.getAttribute('href')} while French isn't built`);
    }
  }
  if (/<loc>[^<]*\/fr\//.test(sitemapXml)) issues.push('sitemap: lists French URLs while French isn\'t built');
  return issues;
}

/**
 * Once French is built, every English page has a French version (shown by its
 * hreflang set). Exceptions: the shared French legal notice, the 404 and
 * blog posts (paired through translationOf instead).
 * Catches a page added under src/pages/ without a route map entry.
 */
export function checkEveryPageHasFrench(pages) {
  const shared = new Set(['mentions-legales/index.html', '404.html']);
  return pages
    .filter((p) => !isFrench(p.path) && !shared.has(p.path))
    // Posts pair through translationOf, enforced at launch by src/data/blog-pairs.ts.
    .filter((p) => !/^blog\/[^/]+\/index\.html$/.test(p.path))
    .filter((p) => !hreflangs(p).some((h) => h.lang === 'fr'))
    .map((p) => `${p.path}: no French version (add it to src/i18n/routes.ts and src/views/registry.ts)`);
}

/** Every link to a file (PDF, image…) on the site points at a file in the build. */
export function checkAssetLinks(pages, exists) {
  const issues = [];
  for (const page of pages) {
    for (const a of dom(page).querySelectorAll('a[href^="/"]')) {
      const path = a.getAttribute('href').split('#')[0].split('?')[0];
      if (!/\.\w+$/.test(path)) continue;
      if (!exists(decodeURIComponent(path.replace(/^\//, '')))) issues.push(`${page.path}: links to missing file ${path}`);
    }
  }
  return issues;
}

/** French is live when the sitemap lists French URLs (astro.config.mjs adds them only with SHOW_FRENCH). */
export function isLaunched(sitemapXml) {
  return /<loc>[^<]*\/fr\//.test(sitemapXml);
}

export function checkCanonical(pages) {
  const issues = [];
  for (const page of pages) {
    const canonical = dom(page).querySelector('link[rel="canonical"]')?.getAttribute('href');
    const own = SITE + fileToUrl(page.path);
    if (canonical && canonical !== own) issues.push(`${page.path}: canonical ${canonical}, expected ${own}`);
  }
  return issues;
}

function collect(dir) {
  const pages = [];
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const full = join(d, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (name === 'index.html') pages.push({ path: relative(dir, full), html: readFileSync(full, 'utf8') });
    }
  };
  walk(dir);
  return pages;
}

function main() {
  const dist = 'dist';
  const pages = collect(dist);
  const exists = (file) => existsSync(join(dist, file));
  const frenchBuilt = existsSync(join(dist, 'fr', 'index.html'));
  const sitemap = ['sitemap-0.xml', 'sitemap-index.xml']
    .filter((f) => existsSync(join(dist, f)))
    .map((f) => readFileSync(join(dist, f), 'utf8'))
    .join('\n');

  // Before launch, French pages built for review (previews, INCLUDE_FRENCH=1)
  // still hold placeholder copy with English links: report them, don't fail.
  const launched = isLaunched(sitemap);
  const frenchLinkIssues = frenchBuilt ? checkFrenchLinks(pages) : [];
  if (frenchLinkIssues.length && !launched) {
    console.warn(`check-dist: ${frenchLinkIssues.length} English link(s) on French pages (allowed until SHOW_FRENCH; run npm run check:fr)`);
  }

  const issues = [
    ...checkLang(pages),
    ...checkCanonical(pages),
    ...checkAssetLinks(pages, exists),
    ...(frenchBuilt
      ? [...(launched ? frenchLinkIssues : []), ...checkAlternatesResolve(pages, exists), ...checkEveryPageHasFrench(pages)]
      : checkNoFrenchLeak(pages, sitemap)),
  ];

  if (issues.length) {
    console.error(`check-dist: ${issues.length} problem(s)\n` + issues.map((i) => `  - ${i}`).join('\n'));
    process.exit(1);
  }
  console.log(`check-dist: ${pages.length} pages OK (${frenchBuilt ? 'French built' : 'English only'})`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
