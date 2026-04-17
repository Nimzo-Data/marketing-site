export interface Technology {
  name: string;
  slug: string;
  category: 'cloud' | 'warehouse' | 'transformation' | 'etl' | 'bi';
  logoPath?: string; // e.g. '/images/tech/bigquery.svg'
}

export const technologies: Technology[] = [
  { name: 'Google Cloud Platform', slug: 'google-cloud-platform', category: 'cloud', logoPath: '/images/tech/gcp.svg' },
  { name: 'BigQuery', slug: 'bigquery', category: 'warehouse', logoPath: '/images/tech/bigquery.svg' },
  { name: 'Dataform', slug: 'dataform', category: 'transformation', logoPath: '/images/tech/dataform.svg' },
  { name: 'dbt', slug: 'dbt', category: 'transformation', logoPath: '/images/tech/dbt.svg' },
  { name: 'Airbyte', slug: 'airbyte', category: 'etl', logoPath: '/images/tech/airbyte.svg' },
  { name: 'Fivetran', slug: 'fivetran', category: 'etl', logoPath: '/images/tech/fivetran.svg' },
  { name: 'Looker', slug: 'looker', category: 'bi', logoPath: '/images/tech/looker.svg' },
  { name: 'Lightdash', slug: 'lightdash', category: 'bi', logoPath: '/images/tech/lightdash.svg' },
  { name: 'Steep', slug: 'steep', category: 'bi', logoPath: '/images/tech/steep.svg' },
];
