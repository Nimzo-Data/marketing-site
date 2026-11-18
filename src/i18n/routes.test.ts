import { describe, it, expect, vi } from 'vitest';

vi.mock('./flags', () => ({ frenchBuilt: true }));

import { routes, href, routeIdForPath, frenchPaths, alternateLinks, type RouteId } from './routes';

const site = new URL('https://nimzodata.com');

describe('route map', () => {
  it('gives the French audit page its French slug', () => {
    expect(href('audit', 'fr')).toBe('/fr/services/audit-plateforme-data/');
    expect(href('audit', 'en')).toBe('/services/data-platform-audit/');
  });

  it('starts and ends every path with a slash', () => {
    for (const paths of Object.values(routes)) {
      for (const p of Object.values(paths)) expect(p).toMatch(/^\/(.*\/)?$/);
    }
  });

  it('never gives two pages the same path in one language, except the shared legal notice', () => {
    for (const locale of ['en', 'fr'] as const) {
      const seen = Object.values(routes).map((p) => p[locale]);
      expect(new Set(seen).size).toBe(seen.length);
    }
  });

  it('keeps every French path under /fr/ except the legal notice', () => {
    for (const [id, paths] of Object.entries(routes)) {
      if (id === 'legalNotice') expect(paths.fr).toBe('/mentions-legales/');
      else expect(paths.fr.startsWith('/fr/')).toBe(true);
    }
  });

  it('covers all eleven tool pages', () => {
    const tools = Object.keys(routes).filter((id) => id.startsWith('tech:'));
    expect(tools).toHaveLength(11);
    expect(href('tech:bigquery' as RouteId, 'fr')).toBe('/fr/technologies/bigquery/');
  });

  it('finds the page id from either language path', () => {
    expect(routeIdForPath('/fr/a-propos/')).toBe('about');
    expect(routeIdForPath('/about/')).toBe('about');
    expect(routeIdForPath('/about')).toBe('about');
    expect(routeIdForPath('/nope/')).toBeUndefined();
  });

  it('lists French catch-all params, skipping pages that are not under /fr/', () => {
    const paths = frenchPaths();
    expect(paths).toContainEqual({ id: 'home', path: undefined });
    expect(paths).toContainEqual({ id: 'about', path: 'a-propos' });
    expect(paths).toContainEqual({ id: 'audit', path: 'services/audit-plateforme-data' });
    expect(paths.find((p) => p.id === 'legalNotice')).toBeUndefined();
  });
});

describe('alternateLinks', () => {
  it('returns en, fr and x-default as absolute URLs', () => {
    expect(alternateLinks(routes.about, site)).toEqual([
      { hreflang: 'en', href: 'https://nimzodata.com/about/' },
      { hreflang: 'fr', href: 'https://nimzodata.com/fr/a-propos/' },
      { hreflang: 'x-default', href: 'https://nimzodata.com/about/' },
    ]);
  });

  it('returns nothing for a page shared by both languages', () => {
    expect(alternateLinks(routes.legalNotice, site)).toEqual([]);
  });
});
