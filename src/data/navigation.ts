import { SHOW_BLOG } from './siteConfig';
import type { LineIconName } from '../components/ui/LineIcon.astro';
import { techLogo } from './technologies';
import type { Locale } from '../i18n/locales';
import { href, type RouteId } from '../i18n/routes';
import { pickCopy } from '../i18n/copy';
import en from './navigation.en';
import fr from './navigation.fr';

export interface NavLink {
  label: string;
  href: string;
  /** Services and Resources menus: line icon and a one-line descriptor under the label. */
  icon?: LineIconName;
  description?: string;
  /** Technology menu: the tool's logo, looked up from technologies.ts. */
  logo?: string;
}

export interface NavDropdownGroup {
  groupLabel?: string;
  links: NavLink[];
}

export interface NavItemSimple {
  type: 'link';
  label: string;
  href: string;
}

export interface NavItemDropdown {
  type: 'dropdown';
  /** Stable id: components branch on it, never on the (translated) label. */
  id: 'services' | 'technology' | 'resources';
  label: string;
  href?: string;
  groups: NavDropdownGroup[];
}

export type NavItem = NavItemSimple | NavItemDropdown;

export interface TechnologyGroup {
  category: string;
  links: NavLink[];
}

export interface Navigation {
  navItems: NavItem[];
  ctaLink: NavLink;
  serviceLinks: NavLink[];
  technologyGroups: TechnologyGroup[];
  companyLinks: NavLink[];
}

export function getNavigation(locale: Locale): Navigation {
  const c = pickCopy({ en, fr }, locale, 'data/navigation');
  const to = (id: RouteId) => href(id, locale);

  // Technology menu links carry the tool logo already used on the technology pages.
  const tech = (label: string, id: RouteId): NavLink => ({
    label,
    href: to(id),
    logo: techLogo(label),
  });

  const serviceLinks: NavLink[] = (['audit', 'build', 'improve', 'support'] as const).map((id) => ({
    label: c.serviceItems[id].label,
    href: to(id),
    icon: id,
    description: c.serviceItems[id].description,
  }));

  const techGroups: NavDropdownGroup[] = [
    {
      groupLabel: c.techGroups.cloud,
      links: [tech('Google Cloud Platform', 'tech:google-cloud-platform'), tech('BigQuery', 'tech:bigquery')],
    },
    { groupLabel: c.techGroups.etl, links: [tech('Airbyte', 'tech:airbyte'), tech('Fivetran', 'tech:fivetran')] },
    { groupLabel: c.techGroups.transformation, links: [tech('Dataform', 'tech:dataform'), tech('dbt', 'tech:dbt')] },
    {
      groupLabel: c.techGroups.bi,
      links: [
        tech('Looker', 'tech:looker'),
        tech('Lightdash', 'tech:lightdash'),
        tech('Metabase', 'tech:metabase'),
        tech('Steep', 'tech:steep'),
      ],
    },
    { groupLabel: c.techGroups.orchestration, links: [tech('Dagster', 'tech:dagster')] },
    { links: [{ label: c.allTechnologies, href: to('technologies') }] },
  ];

  const navItems: NavItem[] = [
    { type: 'dropdown', id: 'services', label: c.services, groups: [{ links: serviceLinks }] },
    { type: 'dropdown', id: 'technology', label: c.technology, href: to('technologies'), groups: techGroups },
    {
      type: 'dropdown',
      id: 'resources',
      label: c.resources,
      groups: [
        {
          links: [
            // Blog sits first once it has something in it. Until then SHOW_BLOG
            // keeps it out of the menu; see src/data/siteConfig.ts.
            ...(SHOW_BLOG
              ? [{ label: c.resourceItems.blog.label, href: to('blog'), icon: 'blog' as const, description: c.resourceItems.blog.description }]
              : []),
            { label: c.resourceItems.caseStudies.label, href: to('caseStudies'), icon: 'case-studies', description: c.resourceItems.caseStudies.description },
            { label: c.resourceItems.sampleAudit.label, href: to('sampleAudit'), icon: 'sample-audit', description: c.resourceItems.sampleAudit.description },
          ],
        },
      ],
    },
    { type: 'link', label: c.about, href: to('about') },
    { type: 'link', label: c.contact, href: to('contact') },
  ];

  return {
    navItems,
    ctaLink: { label: c.cta, href: to('contact') },
    serviceLinks,
    technologyGroups: techGroups.map((g) => ({ category: g.groupLabel ?? '', links: g.links })),
    companyLinks: [
      { label: c.about, href: to('about') },
      { label: c.contact, href: to('contact') },
      { label: c.legal.privacy, href: to('privacy') },
      { label: c.legal.terms, href: to('terms') },
    ],
  };
}

/** Resource and legal labels, for the footer. */
export function getNavigationCopy(locale: Locale) {
  return pickCopy({ en, fr }, locale, 'data/navigation');
}
