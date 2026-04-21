export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  priceRange: string;
  timeline?: string;
}

export const services: Service[] = [
  {
    name: 'Data Platform Implementation',
    slug: 'data-platform-implementation',
    shortDescription: 'Build your data platform from scratch — ingestion, transformation, and reporting — on a modern GCP stack.',
    priceRange: '€15,000 – €35,000',
    timeline: '6–14 weeks',
  },
  {
    name: 'Data Platform Optimization',
    slug: 'data-platform-optimization',
    shortDescription: 'Your pipelines exist but something\'s wrong. We find out why and fix it.',
    priceRange: 'Audit from €3,000 · Full from €15,000',
    timeline: '2–15 weeks',
  },
  {
    name: 'Expert Implementation Services',
    slug: 'expert-implementation-services',
    shortDescription: 'Targeted help with a specific layer of your stack — BigQuery, Dataform, ETL, or BI tooling.',
    priceRange: '€3,000 – €15,000',
    timeline: 'Varies by scope',
  },
  {
    name: 'Ongoing Support & Retainers',
    slug: 'ongoing-support-retainers',
    shortDescription: 'Monthly retainers for monitoring, incident response, and continuous improvement.',
    priceRange: '€1,000 – €4,500/month',
  },
];
