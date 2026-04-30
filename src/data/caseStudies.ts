export interface CaseStudyTool {
  name: string;
  href: string;
  logo: string;
}

export interface CaseStudyShortQuote {
  text: string;
  authorName: string;
  authorTitle: string;
  authorPhoto: string;
}

export interface CaseStudyCompany {
  flag: string;
  city: string;
  size: string;
  sector: string;
}

export interface CaseStudyMeta {
  slug: string;
  client: string;
  clientUrl: string;
  logo: string;
  headline: string;
  subline: string;
  company: CaseStudyCompany;
  service: { label: string; href: string; shortDescription: string };
  tools: CaseStudyTool[];
  shortQuote: CaseStudyShortQuote;
}

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: 'aeyde',
    client: 'Aeyde',
    clientUrl: 'https://aeyde.com',
    logo: '/case-studies/logos/aeyde.svg',
    headline:
      'How Aeyde made Looker dashboards load in seconds, cut data infrastructure costs by 77%, and rebuilt trust in their numbers',
    subline:
      "Five years of organic growth had stretched Aeyde's data stack across multiple systems, slowing reporting and complicating decisions.",
    company: {
      flag: '🇩🇪',
      city: 'Berlin',
      size: '10–50 employees',
      sector: 'Footwear & accessories (D2C + B2B)',
    },
    service: {
      label: 'Data Platform Optimization',
      href: '/services/data-platform-optimization/',
      shortDescription:
        'Audit a stuck data stack, then clean, simplify, and migrate the parts that matter — without trashing what already works.',
    },
    tools: [
      { name: 'Airbyte', href: '/technologies/airbyte/', logo: '/logos/airbyte.svg' },
      { name: 'BigQuery', href: '/technologies/bigquery/', logo: '/logos/bigquery.svg' },
      { name: 'Dataform', href: '/technologies/dataform/', logo: '/logos/dataform.svg' },
      { name: 'Looker', href: '/technologies/looker/', logo: '/logos/looker.svg' },
    ],
    shortQuote: {
      text: 'Dashboards that used to take minutes now load in seconds, and the whole team has real trust in the data again.',
      authorName: 'Phoebe Pham',
      authorTitle: 'BI Lead, Aeyde',
      authorPhoto: '/case-studies/photos/phoebe.svg',
    },
  },
  {
    slug: 'tameson',
    client: 'Tameson',
    clientUrl: 'https://tameson.com',
    logo: '/case-studies/logos/tameson.svg',
    headline:
      'How Tameson turned unused BigQuery data into a foundation for analytics across 6 markets',
    subline:
      'Pipelines were running and data was landing in BigQuery — but most of it sat unmodeled and unused.',
    company: {
      flag: '🇳🇱',
      city: 'Eindhoven',
      size: '10–50 employees',
      sector: 'Industrial supply e-commerce',
    },
    service: {
      label: 'Expert Implementation Services',
      href: '/services/expert-implementation-services/',
      shortDescription:
        'Drop in as senior data engineering — modeling discipline, governance, and architecture — alongside teams that handle their own ingestion.',
    },
    tools: [
      { name: 'BigQuery', href: '/technologies/bigquery/', logo: '/logos/bigquery.svg' },
      { name: 'Dataform', href: '/technologies/dataform/', logo: '/logos/dataform.svg' },
    ],
    shortQuote: {
      text: "Most of our BigQuery data wasn't usable for analysis. Now it's the platform our analytics actually run on.",
      authorName: 'Paul van Oorschot',
      authorTitle: 'CTO, Tameson',
      authorPhoto: '/case-studies/photos/tameson-paul.jpg',
    },
  },
];

export function findCaseStudy(slug: string): CaseStudyMeta | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
