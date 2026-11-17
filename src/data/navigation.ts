import { SHOW_BLOG } from './siteConfig';
import type { LineIconName } from '../components/ui/LineIcon.astro';
import { technologies } from './technologies';

export interface NavLink {
  label: string;
  href: string;
  /** Services and Resources menus: line icon and a one-line descriptor under the label. */
  icon?: LineIconName;
  description?: string;
  /** Technology menu: the tool's logo, looked up from technologies.ts. */
  logo?: string;
}

// Technology menu links carry the tool logo already used on the technology pages.
function tech(label: string, href: string): NavLink {
  return { label, href, logo: technologies.find((t) => t.name === label)?.logoPath };
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
  label: string;
  href?: string;
  groups: NavDropdownGroup[];
}

export type NavItem = NavItemSimple | NavItemDropdown;

export const navItems: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Services',
    groups: [
      {
        links: [
          { label: 'Audit', href: '/services/data-platform-audit/', icon: 'audit', description: 'Find out what your numbers run on' },
          { label: 'Build', href: '/services/data-platform-build/', icon: 'build', description: 'A new platform, or a replacement' },
          { label: 'Improve', href: '/services/data-platform-improvement/', icon: 'improve', description: 'Fix or add, one project at a time' },
          { label: 'Support', href: '/services/data-platform-support/', icon: 'support', description: 'A senior engineer on call, monthly' },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Technology',
    href: '/technologies/',
    groups: [
      {
        groupLabel: 'Cloud & Warehouse',
        links: [
          tech('Google Cloud Platform', '/technologies/google-cloud-platform/'),
          tech('BigQuery', '/technologies/bigquery/'),
        ],
      },
      {
        groupLabel: 'ETL / ELT',
        links: [
          tech('Airbyte', '/technologies/airbyte/'),
          tech('Fivetran', '/technologies/fivetran/'),
        ],
      },
      {
        groupLabel: 'Transformation',
        links: [
          tech('Dataform', '/technologies/dataform/'),
          tech('dbt', '/technologies/dbt/'),
        ],
      },
      {
        groupLabel: 'Business Intelligence',
        links: [
          tech('Looker', '/technologies/looker/'),
          tech('Lightdash', '/technologies/lightdash/'),
          tech('Metabase', '/technologies/metabase/'),
          tech('Steep', '/technologies/steep/'),
        ],
      },
      {
        groupLabel: 'Orchestration',
        links: [
          tech('Dagster', '/technologies/dagster/'),
        ],
      },
      {
        links: [
          { label: 'All technologies', href: '/technologies/' },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Resources',
    groups: [
      {
        links: [
          // Blog sits first once it has something in it. Until then SHOW_BLOG
          // keeps it out of the menu; see src/data/siteConfig.ts.
          ...(SHOW_BLOG
            ? [{ label: 'Blog', href: '/blog/', icon: 'blog' as const, description: 'How we think about data platforms' }]
            : []),
          { label: 'Case Studies', href: '/case-studies/', icon: 'case-studies', description: 'What we built, and what changed' },
          { label: 'Sample Audit Deliverable', href: '/sample-audit/', icon: 'sample-audit', description: 'A full audit, for a fictional company' },
        ],
      },
    ],
  },
  {
    type: 'link',
    label: 'About',
    href: '/about/',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact/',
  },
];

export const ctaLink: NavLink = {
  label: "Let's talk",
  href: '/contact/',
};

export const serviceLinks: NavLink[] = (navItems.find(n => n.label === 'Services') as NavItemDropdown).groups[0].links;

export interface TechnologyGroup {
  category: string;
  links: NavLink[];
}

export const technologyGroups: TechnologyGroup[] = (navItems.find(n => n.label === 'Technology') as NavItemDropdown).groups.map(g => ({
  category: g.groupLabel ?? '',
  links: g.links,
}));

export const companyLinks: NavLink[] = [
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Service', href: '/terms-of-service/' },
];
