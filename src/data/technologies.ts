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
    tagline: 'Serverless data warehouse. Gemini-native. EU multi-region ready.',
    logoPath: '/logos/bigquery.svg',
  },
  {
    name: 'Dataform',
    slug: 'dataform',
    category: 'transformation',
    tagline: 'SQL transformations, GCP-native. Our first choice on fresh projects.',
    logoPath: '/logos/dataform.svg',
  },
  {
    name: 'dbt',
    slug: 'dbt',
    category: 'transformation',
    tagline: 'When clients bring dbt, we work within it.',
    logoPath: '/logos/dbt.svg',
  },
  {
    name: 'Airbyte',
    slug: 'airbyte',
    category: 'etl',
    tagline: 'Cloud or open-source ELT. 600+ connectors, plus a builder for custom APIs.',
    logoPath: '/logos/airbyte.svg',
  },
  {
    name: 'Fivetran',
    slug: 'fivetran',
    category: 'etl',
    tagline: 'Managed ELT when reliability matters more than cost.',
    logoPath: '/logos/fivetran.svg',
  },
  {
    name: 'Looker',
    slug: 'looker',
    category: 'bi',
    tagline: 'Enterprise BI with LookML governance and Gemini-powered conversational analytics.',
    logoPath: '/logos/looker.svg',
  },
  {
    name: 'Lightdash',
    slug: 'lightdash',
    category: 'bi',
    tagline: 'BI with metrics in code. AI-native. Flat-rate instead of per-seat.',
    logoPath: '/logos/lightdash.svg',
  },
  {
    name: 'Metabase',
    slug: 'metabase',
    category: 'bi',
    tagline: 'Open-source BI for everyone. Dashboards, metrics, and an AI that answers back.',
    logoPath: '/logos/metabase.svg',
  },
  {
    name: 'Steep',
    slug: 'steep',
    category: 'bi',
    tagline: 'Metric-based BI for non-technical teams. Ask questions, get answers.',
    logoPath: '/logos/steep.svg',
  },
  {
    name: 'Dagster',
    slug: 'dagster',
    category: 'orchestration',
    tagline: 'Orchestration when the pipeline gets complex.',
    logoPath: '/logos/dagster.svg',
  },
];

// Subset used in the LogoGrid on homepage + service pages (excludes GCP — shown as a page but not as a grid tile).
export const technologiesForGrid: Technology[] = technologies.filter((t) => !t.hiddenFromGrid);
