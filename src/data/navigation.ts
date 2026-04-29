export interface NavLink {
  label: string;
  href: string;
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
          {
            label: 'Data Platform Implementation',
            href: '/services/data-platform-implementation/',
          },
          {
            label: 'Data Platform Optimization',
            href: '/services/data-platform-optimization/',
          },
          {
            label: 'Expert Implementation Services',
            href: '/services/expert-implementation-services/',
          },
          {
            label: 'Ongoing Support & Retainers',
            href: '/services/ongoing-support-retainers/',
          },
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
          { label: 'Google Cloud Platform', href: '/technologies/google-cloud-platform/' },
          { label: 'BigQuery', href: '/technologies/bigquery/' },
        ],
      },
      {
        groupLabel: 'ETL / ELT',
        links: [
          { label: 'Airbyte', href: '/technologies/airbyte/' },
          { label: 'Fivetran', href: '/technologies/fivetran/' },
        ],
      },
      {
        groupLabel: 'Transformation',
        links: [
          { label: 'Dataform', href: '/technologies/dataform/' },
          { label: 'dbt', href: '/technologies/dbt/' },
        ],
      },
      {
        groupLabel: 'Business Intelligence',
        links: [
          { label: 'Looker', href: '/technologies/looker/' },
          { label: 'Lightdash', href: '/technologies/lightdash/' },
          { label: 'Metabase', href: '/technologies/metabase/' },
          { label: 'Steep', href: '/technologies/steep/' },
        ],
      },
      {
        groupLabel: 'Orchestration',
        links: [
          { label: 'Dagster', href: '/technologies/dagster/' },
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
    type: 'link',
    label: 'Case Studies',
    href: '/case-studies/',
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
