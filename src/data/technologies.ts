export interface Technology {
  name: string;
  slug: string;
  category: 'cloud' | 'warehouse' | 'transformation' | 'etl' | 'bi' | 'orchestration';
  tagline: string;
  logoPath?: string;
}

export const technologies: Technology[] = [
  { name: 'Google Cloud Platform', slug: 'google-cloud-platform', category: 'cloud', tagline: 'The cloud. All of it.', logoPath: '/logos/googlecloud.svg' },
  { name: 'BigQuery', slug: 'bigquery', category: 'warehouse', tagline: 'Where the data lives.', logoPath: '/logos/bigquery.svg' },
  { name: 'Dataform', slug: 'dataform', category: 'transformation', tagline: 'SQL transformations, GCP-native.', logoPath: '/logos/dataform.svg' },
  { name: 'dbt', slug: 'dbt', category: 'transformation', tagline: 'When clients bring dbt. We work within it.', logoPath: '/logos/dbt.svg' },
  { name: 'Airbyte', slug: 'airbyte', category: 'etl', tagline: 'Open-source ELT. Hundreds of connectors.', logoPath: '/logos/airbyte.svg' },
  { name: 'Fivetran', slug: 'fivetran', category: 'etl', tagline: 'Managed ELT when reliability matters more than cost.', logoPath: '/logos/fivetran.svg' },
  { name: 'Looker', slug: 'looker', category: 'bi', tagline: 'Enterprise BI with a real semantic layer.', logoPath: '/logos/looker.svg' },
  { name: 'Lightdash', slug: 'lightdash', category: 'bi', tagline: 'dbt-native BI for teams already invested in dbt.', logoPath: '/logos/lightdash.svg' },
  { name: 'Steep', slug: 'steep', category: 'bi', tagline: 'No-code BI for non-technical users.', logoPath: '/logos/steep.svg' },
  { name: 'Dagster', slug: 'dagster', category: 'orchestration', tagline: 'Orchestration when the pipeline gets complex.', logoPath: '/logos/dagster.svg' },
];
