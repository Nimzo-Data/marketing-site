export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  priceRange: string;
  timeline?: string;
}

// The four services, in the order a client moves through them. The audit
// decides between Build (two or more layers added or replaced) and Improve
// (one layer added, or fixes across existing layers).
export const services: Service[] = [
  {
    name: 'Audit',
    slug: 'data-platform-audit',
    shortDescription: "Find out what your reporting runs on, what's wrong with it, and what to keep, fix or build.",
    priceRange: '€3,000 – €5,000',
    timeline: '1–2 weeks',
  },
  {
    name: 'Build',
    slug: 'data-platform-build',
    shortDescription: 'A new Google Cloud data platform, fixed price, handed over documented.',
    priceRange: '€15,000 – €50,000',
    timeline: '8–16 weeks',
  },
  {
    name: 'Improve',
    slug: 'data-platform-improvement',
    shortDescription: "Fix what's broken, add what's missing. One fixed-price project at a time.",
    priceRange: '€5,000 – €15,000 per project',
    timeline: '2–6 weeks per project',
  },
  {
    name: 'Support',
    slug: 'data-platform-support',
    shortDescription: 'Monthly retainer for monitoring, incidents, small improvements, and a senior engineer on call.',
    priceRange: '€1,000 – €4,000/month',
  },
];

// Next-step card copy. Every "Not sure this is the right fit?" block (Build,
// Improve, Support) and the technology pages show the other services with the
// same icon, name, one line and link; only the small label above each card
// changes per page. Spread one of these into <LeadCard> and pass `eyebrow` and
// `dataTrack` alongside.
export interface ServiceLead {
  icon: 'audit' | 'build' | 'improve' | 'support';
  title: string;
  body: string;
  href: string;
  linkText: string;
}

export const serviceLeads: Record<'audit' | 'build' | 'improve' | 'support', ServiceLead> = {
  audit: {
    icon: 'audit',
    title: 'Audit',
    body: 'A verdict on each part of your platform and a fixed price for the next step.',
    href: '/services/data-platform-audit/',
    linkText: 'See Audit',
  },
  build: {
    icon: 'build',
    title: 'Build',
    body: 'A new Google Cloud data platform, or a replacement for one that has to go. Priced after an audit.',
    href: '/services/data-platform-build/',
    linkText: 'See Build',
  },
  improve: {
    icon: 'improve',
    title: 'Improve',
    body: "Fix what's broken or add what's missing, one fixed-price project at a time.",
    href: '/services/data-platform-improvement/',
    linkText: 'See Improve',
  },
  support: {
    icon: 'support',
    title: 'Support',
    body: 'A senior engineer on call for monitoring, incidents and small improvements.',
    href: '/services/data-platform-support/',
    linkText: 'See Support',
  },
};
