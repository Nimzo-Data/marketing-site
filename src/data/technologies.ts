export interface Technology {
  name: string;
  slug: string;
  category: 'cloud' | 'warehouse' | 'transformation' | 'etl' | 'bi' | 'orchestration';
  tagline: string;
  logoPath?: string;
  hiddenFromGrid?: boolean;
}

export const technologies: Technology[] = [
  {
    name: 'Google Cloud Platform',
    slug: 'google-cloud-platform',
    category: 'cloud',
    tagline: 'Our foundation. AI-native data cloud with European sovereignty options.',
    logoPath: '/logos/googlecloud.svg',
    hiddenFromGrid: true,
  },
  {
    name: 'BigQuery',
    slug: 'bigquery',
    category: 'warehouse',
    tagline: 'Serverless data warehouse with built-in Gemini AI and EU data residency.',
    logoPath: '/logos/bigquery.svg',
  },
  {
    name: 'Dataform',
    slug: 'dataform',
    category: 'transformation',
    tagline: 'SQL transformations built into BigQuery. Zero extra licensing. Our default.',
    logoPath: '/logos/dataform.svg',
  },
  {
    name: 'dbt',
    slug: 'dbt',
    category: 'transformation',
    tagline: 'Industry-standard SQL transformations. Full support for your existing dbt projects.',
    logoPath: '/logos/dbt.svg',
  },
  {
    name: 'Airbyte',
    slug: 'airbyte',
    category: 'etl',
    tagline: 'Managed ELT with 600+ connectors and a builder for custom APIs.',
    logoPath: '/logos/airbyte.svg',
  },
  {
    name: 'Fivetran',
    slug: 'fivetran',
    category: 'etl',
    tagline: 'Fully managed ELT with 600+ connectors and automated schema handling.',
    logoPath: '/logos/fivetran.svg',
  },
  {
    name: 'Looker',
    slug: 'looker',
    category: 'bi',
    tagline: 'Enterprise BI with LookML governance and Gemini conversational analytics.',
    logoPath: '/logos/looker.svg',
  },
  {
    name: 'Lightdash',
    slug: 'lightdash',
    category: 'bi',
    tagline: 'BI with metrics in code — dbt or native YAML. Flat-rate pricing, unlimited users.',
    logoPath: '/logos/lightdash.svg',
  },
  {
    name: 'Metabase',
    slug: 'metabase',
    category: 'bi',
    tagline: 'Approachable BI with dashboards, governed metrics, and Metabot AI.',
    logoPath: '/logos/metabase.svg',
  },
  {
    name: 'Steep',
    slug: 'steep',
    category: 'bi',
    tagline: 'AI analytics built on governed metrics. Non-technical teams ask, get trusted answers.',
    logoPath: '/logos/steep.svg',
  },
  {
    name: 'Dagster',
    slug: 'dagster',
    category: 'orchestration',
    tagline: 'Asset-based orchestration. Declare pipelines and dependencies as code.',
    logoPath: '/logos/dagster.svg',
  },
];

// Subset used in the LogoGrid on homepage + service pages (excludes GCP — shown as a page but not as a grid tile).
export const technologiesForGrid: Technology[] = technologies.filter((t) => !t.hiddenFromGrid);
