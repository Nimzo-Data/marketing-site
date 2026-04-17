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
            label: 'Data Analytics Platform Implementation',
            href: '/services/data-analytics-platform-implementation/',
          },
          {
            label: 'Data Analytics Platform Optimization',
            href: '/services/data-analytics-platform-optimization/',
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
    groups: [
      {
        groupLabel: 'Cloud & Warehouse',
        links: [
          { label: 'Google Cloud Platform', href: '/technologies/google-cloud-platform/' },
          { label: 'BigQuery', href: '/technologies/bigquery/' },
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
        groupLabel: 'ETL/ELT',
        links: [
          { label: 'Airbyte', href: '/technologies/airbyte/' },
          { label: 'Fivetran', href: '/technologies/fivetran/' },
        ],
      },
      {
        groupLabel: 'Business Intelligence',
        links: [
          { label: 'Looker', href: '/technologies/looker/' },
          { label: 'Lightdash', href: '/technologies/lightdash/' },
          { label: 'Steep', href: '/technologies/steep/' },
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
  label: 'Book a free call',
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
