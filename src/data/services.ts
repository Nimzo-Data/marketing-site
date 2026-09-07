export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  priceRange: string;
  timeline?: string;
}

export const services: Service[] = [
  {
    name: 'Data Platform Audit',
    slug: 'data-platform-audit',
    shortDescription: 'A 1–2 week paid engagement that produces a tool recommendation, a 12-month cost estimate, and a fixed-price proposal you can act on.',
    priceRange: '€3,000 – €5,000',
    timeline: '1–2 weeks',
  },
  {
    name: 'Data Platform Implementation',
    slug: 'data-platform-implementation',
    shortDescription: 'Build your data platform from scratch (ingestion, transformation, and reporting) on a modern GCP stack.',
    priceRange: '€15,000 – €35,000',
    timeline: '8–14 weeks',
  },
  {
    name: 'Data Platform Optimization',
    slug: 'data-platform-optimization',
    shortDescription: 'Your pipelines exist but something\'s wrong. We find out why and improve it.',
    priceRange: 'Audit from €3,000 · Full from €15,000',
    timeline: '10–16 weeks',
  },
  {
    name: 'Expert Services',
    slug: 'expert-implementation-services',
    shortDescription: 'Targeted help with a specific layer of your stack: BigQuery, Dataform, ETL, or BI tooling.',
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

// Cross-sell card copy. Every service page and the technology layout link to the
// other services with the same href, description and button label; only the
// framing title and the analytics tag change per context. Spread one of these
// into <CTACard> and pass title/dataTrack alongside.
export interface CrossSell {
  href: string;
  description: string;
  buttonText: string;
}

export const crossSell: Record<
  'implementation' | 'optimization' | 'expert' | 'retainers',
  CrossSell
> = {
  implementation: {
    href: '/services/data-platform-implementation/',
    description:
      'Build end-to-end from scratch: ingestion, transformations, dashboards. Audit first, then a fixed-price build.',
    buttonText: 'See Implementation',
  },
  optimization: {
    href: '/services/data-platform-optimization/',
    description:
      'Audit what you have, then build the improvements. Two phases: audit first, then a fixed-price build.',
    buttonText: 'See Optimization',
  },
  expert: {
    href: '/services/expert-implementation-services/',
    description:
      'Focused help on one or two layers: Dataform, Looker, BigQuery costs. Fixed-price, 2–6 weeks.',
    buttonText: 'See Expert Services',
  },
  retainers: {
    href: '/services/ongoing-support-retainers/',
    description:
      'Monthly retainer for monitoring, incident response, improvements, and a senior engineer on call.',
    buttonText: 'See Ongoing Support',
  },
};
