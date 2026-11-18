// Every page and its URL in each language. The language switch, hreflang,
// navigation and internal links in copy all read from here, so a French page
// never links to an English URL by accident. English paths are the live URLs
// and never change; French slugs are French.
import type { Locale } from './locales';
import { frenchBuilt } from './flags';

const tools = [
  'airbyte',
  'bigquery',
  'dagster',
  'dataform',
  'dbt',
  'fivetran',
  'google-cloud-platform',
  'lightdash',
  'looker',
  'metabase',
  'steep',
] as const;

type ToolId = `tech:${(typeof tools)[number]}`;

const toolRoutes = Object.fromEntries(
  tools.map((slug) => [`tech:${slug}`, { en: `/technologies/${slug}/`, fr: `/fr/technologies/${slug}/` }])
) as Record<ToolId, Record<Locale, string>>;

export const routes = {
  home: { en: '/', fr: '/fr/' },
  about: { en: '/about/', fr: '/fr/a-propos/' },
  contact: { en: '/contact/', fr: '/fr/contact/' },
  audit: { en: '/services/data-platform-audit/', fr: '/fr/services/audit-plateforme-data/' },
  build: { en: '/services/data-platform-build/', fr: '/fr/services/construction-plateforme-data/' },
  improve: { en: '/services/data-platform-improvement/', fr: '/fr/services/amelioration-plateforme-data/' },
  support: { en: '/services/data-platform-support/', fr: '/fr/services/support-plateforme-data/' },
  caseStudies: { en: '/case-studies/', fr: '/fr/etudes-de-cas/' },
  aeyde: { en: '/case-studies/aeyde/', fr: '/fr/etudes-de-cas/aeyde/' },
  tameson: { en: '/case-studies/tameson/', fr: '/fr/etudes-de-cas/tameson/' },
  technologies: { en: '/technologies/', fr: '/fr/technologies/' },
  ...toolRoutes,
  sampleAudit: { en: '/sample-audit/', fr: '/fr/exemple-audit/' },
  blog: { en: '/blog/', fr: '/fr/blog/' },
  privacy: { en: '/privacy-policy/', fr: '/fr/politique-de-confidentialite/' },
  terms: { en: '/terms-of-service/', fr: '/fr/conditions-generales/' },
  // French-only legal requirement, shared by both languages.
  legalNotice: { en: '/mentions-legales/', fr: '/mentions-legales/' },
} satisfies Record<string, Record<Locale, string>>;

export type RouteId = keyof typeof routes;

export function href(id: RouteId, locale: Locale): string {
  return routes[id][locale];
}

export function routeIdForPath(pathname: string): RouteId | undefined {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return (Object.keys(routes) as RouteId[]).find(
    (id) => routes[id].en === path || routes[id].fr === path
  );
}

/** Params for src/pages/fr/[...path].astro: '/fr/a-propos/' → 'a-propos', '/fr/' → undefined. */
export function frenchPaths(): { id: RouteId; path: string | undefined }[] {
  return (Object.keys(routes) as RouteId[])
    .filter((id) => routes[id].fr.startsWith('/fr/'))
    .map((id) => ({ id, path: routes[id].fr.slice('/fr/'.length, -1) || undefined }));
}

export interface Alternate {
  hreflang: 'en' | 'fr' | 'x-default';
  href: string;
}

/** hreflang alternates for a page, or none when French isn't built or the page is shared. */
export function alternateLinks(paths: Record<Locale, string>, site: URL): Alternate[] {
  if (!frenchBuilt || paths.en === paths.fr) return [];
  const abs = (p: string) => new URL(p, site).href;
  return [
    { hreflang: 'en', href: abs(paths.en) },
    { hreflang: 'fr', href: abs(paths.fr) },
    { hreflang: 'x-default', href: abs(paths.en) },
  ];
}
