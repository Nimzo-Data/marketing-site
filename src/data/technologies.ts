import type { Locale } from '../i18n/locales';
import { pickCopy } from '../i18n/copy';
import en from './technologies.en';
import fr from './technologies.fr';

export interface Technology {
  name: string;
  slug: string;
  category: 'cloud' | 'warehouse' | 'transformation' | 'etl' | 'bi' | 'orchestration';
  tagline: string;
  logoPath?: string;
  hiddenFromGrid?: boolean;
}

const base: Omit<Technology, 'tagline'>[] = [
  { name: 'Google Cloud Platform', slug: 'google-cloud-platform', category: 'cloud', logoPath: '/logos/googlecloud.svg', hiddenFromGrid: true },
  { name: 'BigQuery', slug: 'bigquery', category: 'warehouse', logoPath: '/logos/bigquery.svg' },
  { name: 'Dataform', slug: 'dataform', category: 'transformation', logoPath: '/logos/dataform.svg' },
  { name: 'dbt', slug: 'dbt', category: 'transformation', logoPath: '/logos/dbt.svg' },
  { name: 'Airbyte', slug: 'airbyte', category: 'etl', logoPath: '/logos/airbyte.svg' },
  { name: 'Fivetran', slug: 'fivetran', category: 'etl', logoPath: '/logos/fivetran.svg' },
  { name: 'Looker', slug: 'looker', category: 'bi', logoPath: '/logos/looker.svg' },
  { name: 'Lightdash', slug: 'lightdash', category: 'bi', logoPath: '/logos/lightdash.svg' },
  { name: 'Metabase', slug: 'metabase', category: 'bi', logoPath: '/logos/metabase.svg' },
  { name: 'Steep', slug: 'steep', category: 'bi', logoPath: '/logos/steep.svg' },
  { name: 'Dagster', slug: 'dagster', category: 'orchestration', logoPath: '/logos/dagster.svg' },
];

export function getTechnologies(locale: Locale): Technology[] {
  const { taglines } = pickCopy({ en, fr }, locale, 'data/technologies');
  return base.map((t) => ({ ...t, tagline: taglines[t.slug as keyof typeof taglines] }));
}

// Subset used in the LogoGrid on homepage + service pages (excludes GCP — shown as a page but not as a grid tile).
export function getTechnologiesForGrid(locale: Locale): Technology[] {
  return getTechnologies(locale).filter((t) => !t.hiddenFromGrid);
}

/** Logo for a tool name, language-neutral. */
export function techLogo(name: string): string | undefined {
  return base.find((t) => t.name === name)?.logoPath;
}
