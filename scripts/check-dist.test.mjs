import { describe, it, expect } from 'vitest';
import { checkLang, checkFrenchLinks, checkAlternatesResolve, checkNoFrenchLeak, checkCanonical, checkEveryPageHasFrench, isLaunched } from './check-dist.mjs';

const page = (path, body, { lang = path.startsWith('fr/') ? 'fr' : 'en', head = '' } = {}) => ({
  path,
  html: `<html lang="${lang}"><head>${head}</head><body>${body}</body></html>`,
});
const alt = (hreflang, href) => `<link rel="alternate" hreflang="${hreflang}" href="https://nimzodata.com${href}">`;
const canon = (href) => `<link rel="canonical" href="https://nimzodata.com${href}">`;

describe('checkLang', () => {
  it('passes French pages in French and English pages in English', () => {
    expect(checkLang([page('fr/a-propos/index.html', ''), page('about/index.html', '')])).toEqual([]);
  });
  it('flags a French page declared as English', () => {
    expect(checkLang([page('fr/a-propos/index.html', '', { lang: 'en' })])).toHaveLength(1);
  });
});

describe('checkFrenchLinks', () => {
  it('flags a French page linking to an English page', () => {
    expect(checkFrenchLinks([page('fr/index.html', '<a href="/contact/">x</a>')])).toHaveLength(1);
  });
  it('allows French links, the language switch, the legal notice, assets, mail and external links', () => {
    const body = [
      '<a href="/fr/contact/">x</a>',
      '<a href="/about/" data-lang-switch>EN</a>',
      '<a href="/mentions-legales/">x</a>',
      '<a href="/Nimzo-Data-Exemple-Audit.pdf">x</a>',
      '<a href="mailto:hello@nimzodata.com">x</a>',
      '<a href="https://aeyde.com">x</a>',
      '<a href="#top">x</a>',
    ].join('');
    expect(checkFrenchLinks([page('fr/index.html', body)])).toEqual([]);
  });
  it('ignores English pages', () => {
    expect(checkFrenchLinks([page('index.html', '<a href="/contact/">x</a>')])).toEqual([]);
  });
});

describe('checkAlternatesResolve', () => {
  const exists = (p) => ['about/index.html', 'fr/a-propos/index.html'].includes(p);
  it('passes reciprocal alternates that exist', () => {
    const pages = [
      page('about/index.html', '<a href="/fr/a-propos/" data-lang-switch>FR</a>', { head: alt('en', '/about/') + alt('fr', '/fr/a-propos/') + alt('x-default', '/about/') }),
      page('fr/a-propos/index.html', '<a href="/about/" data-lang-switch>EN</a>', { head: alt('en', '/about/') + alt('fr', '/fr/a-propos/') + alt('x-default', '/about/') }),
    ];
    expect(checkAlternatesResolve(pages, exists)).toEqual([]);
  });
  it('flags a hreflang pointing at a missing page', () => {
    const pages = [page('about/index.html', '', { head: alt('en', '/about/') + alt('fr', '/fr/missing/') })];
    expect(checkAlternatesResolve(pages, exists).length).toBeGreaterThan(0);
  });
  it('flags a switch pointing at a missing page', () => {
    expect(checkAlternatesResolve([page('about/index.html', '<a href="/fr/missing/" data-lang-switch>FR</a>')], exists)).toHaveLength(1);
  });
  it('flags alternates that are not reciprocal', () => {
    const pages = [
      page('about/index.html', '', { head: alt('en', '/about/') + alt('fr', '/fr/a-propos/') }),
      page('fr/a-propos/index.html', '', { head: alt('en', '/contact/') + alt('fr', '/fr/a-propos/') }),
    ];
    expect(checkAlternatesResolve(pages, (p) => true).length).toBeGreaterThan(0);
  });
});

describe('checkNoFrenchLeak', () => {
  it('flags a language switch while no French page was built', () => {
    expect(checkNoFrenchLeak([page('index.html', '<a href="/fr/" data-lang-switch>FR</a>')], '<urlset></urlset>')).toHaveLength(1);
  });
  it('flags hreflang and French sitemap entries while no French page was built', () => {
    const issues = checkNoFrenchLeak(
      [page('index.html', '', { head: alt('fr', '/fr/') })],
      '<urlset><url><loc>https://nimzodata.com/fr/</loc></url></urlset>'
    );
    expect(issues).toHaveLength(2);
  });
  it('passes a clean English-only build', () => {
    expect(checkNoFrenchLeak([page('index.html', '<a href="/contact/">x</a>')], '<urlset></urlset>')).toEqual([]);
  });
});

describe('checkCanonical', () => {
  it('passes a page whose canonical is its own URL', () => {
    expect(checkCanonical([page('fr/a-propos/index.html', '', { head: canon('/fr/a-propos/') })])).toEqual([]);
  });
  it('flags a French page pointing its canonical at the English page', () => {
    expect(checkCanonical([page('fr/a-propos/index.html', '', { head: canon('/about/') })])).toHaveLength(1);
  });
});

describe('checkEveryPageHasFrench', () => {
  const withAlts = (path) => page(path, '', { head: alt('en', '/x/') + alt('fr', '/fr/x/') });
  it('flags an English page with no French version', () => {
    expect(checkEveryPageHasFrench([page('sample-audit/acme/index.html', '')])).toHaveLength(1);
  });
  it('leaves blog posts to the pairing rule (src/data/blog-pairs.ts), but not the blog index', () => {
    expect(checkEveryPageHasFrench([page('blog/dataform-not-dbt/index.html', '')])).toEqual([]);
    expect(checkEveryPageHasFrench([page('blog/index.html', '')])).toHaveLength(1);
  });
  it('passes paired pages, French pages, the shared legal notice and the 404', () => {
    expect(
      checkEveryPageHasFrench([withAlts('about/index.html'), page('fr/a-propos/index.html', ''), page('mentions-legales/index.html', ''), page('404.html', '')])
    ).toEqual([]);
  });
});

describe('isLaunched', () => {
  it('follows the sitemap: French URLs are listed only once SHOW_FRENCH is on', () => {
    expect(isLaunched('<urlset><url><loc>https://nimzodata.com/fr/</loc></url></urlset>')).toBe(true);
    expect(isLaunched('<urlset><url><loc>https://nimzodata.com/</loc></url></urlset>')).toBe(false);
  });
});
