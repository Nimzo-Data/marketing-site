// Interface strings shared by every page: layout chrome, the cookie banner and
// the labels components render themselves. French lives in ui.fr.ts and must
// match this shape. Keys ending in Html hold HTML and render with set:html.
const ui = {
  site: {
    organizationDescription:
      'Boutique GCP data consulting: data platform audits, builds, improvements, and support.',
    breadcrumbHome: 'Home',
    rssTitle: 'Nimzo Data Blog',
  },
  header: {
    logoAria: 'Nimzo Data — Home',
    mainNav: 'Main navigation',
    openMenu: 'Open navigation menu',
  },
  mobileMenu: {
    dialog: 'Navigation menu',
    close: 'Close navigation menu',
    nav: 'Mobile navigation',
  },
  footer: {
    tagline: 'Google Cloud data platforms for growing European companies.',
    location: 'Based in France. Serving Europe.',
    services: 'Services',
    technologies: 'Technologies',
    viewAll: 'View all',
    resources: 'Resources',
    company: 'Company',
    getInTouch: 'Get in touch',
    letsTalk: "Let's talk",
    cookiePreferences: 'Cookie preferences',
  },
  components: {
    learnMore: 'Learn more',
    ctaBanner: {
      heading: 'Ready to talk about your data stack?',
      subtitle: '45-minute call. No sales pitch.',
      button: "Let's talk",
    },
    founder: {
      moreAbout: 'More about Antoine',
      /** Joins the last two client names. */
      and: ' and ',
    },
    caseStudy: {
      eyebrow: 'Case study',
      engagementDetails: 'Engagement details',
      company: 'Company',
      service: 'Service',
      tools: 'Tools',
      readCaseStudy: 'Read case study',
      readClientCaseStudy: (client: string) => `Read the ${client} case study`,
      logoAlt: (client: string) => `${client} logo`,
      photoOf: (name: string) => `Photo of ${name}`,
      translatedFromEnglish: 'Translated from English',
    },
    problemOutcome: {
      problem: 'The problem',
      outcome: 'What you get',
    },
    pricing: {
      factorsTitle: 'What affects the price',
      factor: 'Factor',
      lower: 'Lower price',
      higher: 'Higher price',
      scenarios: 'Example scenarios',
    },
    retainer: {
      fitLabel: 'For you if',
      included: 'Included',
      notIncluded: 'Not included',
      everythingIn: (tier: string) => `Everything in ${tier}, plus:`,
    },
  },
  diagrams: {
    dataPlatform: {
      aria: 'Nimzo Data platform diagram: sources flow through ETL into BigQuery, are transformed, then surfaced in BI tools. Dagster orchestrates across all stages.',
      sources: 'Sources',
      andMore: '+ and more',
      etl: 'ETL / ELT',
      warehouse: 'Warehouse',
      bi: 'Business Intelligence',
      transformation: 'Transformation',
      orchestration: 'Orchestration',
    },
    tameson: {
      aria: 'Tameson Dataform layered architecture: raw data ingested via Dagster, Datastream, Fivetran, Stitch into BigQuery, then modeled in Dataform across staging, intermediate, mart, and reports layers.',
      bigQueryNote: 'Everything lives in BigQuery',
      raw: 'Raw',
      ingestedVia: 'Ingested via:',
      modeledIn: 'Modeled in Dataform',
      layers: [
        { label: 'Staging', blurb: '1:1 with raw. Renaming, casting, light cleaning.' },
        { label: 'Intermediate', blurb: 'Joins and logic within a single domain.' },
        { label: 'Mart', blurb: 'Cross-domain business logic: facts and dimensions.' },
        { label: 'Reports', blurb: 'BI-ready OBT tables for Looker Studio.' },
      ],
    },
    aeyde: {
      aria: 'Aeyde stack: before vs after the engagement.',
      before: 'Before',
      after: 'After',
      etl: 'ETL',
      warehouse: 'Warehouse',
      transformation: 'Transformation',
      bi: 'BI',
      splitLogic: 'split logic',
      derivedTablesBefore: '119 derived tables',
      onePlace: 'one place',
      derivedTablesAfter: '0 derived tables',
      perMonth: (amount: string) => `${amount}/mo`,
    },
    modelingLayers: [
      { label: 'Raw', caption: 'source tables as loaded' },
      { label: 'Staging', caption: 'renamed, typed, one per source table' },
      { label: 'Intermediate', caption: 'joins and business logic' },
      { label: 'Marts', caption: 'facts and dimensions, described, tested' },
      { label: 'Reviewed definitions', caption: 'metrics defined once, in the BI tool', gapBefore: true },
    ] as { label: string; caption: string; gapBefore?: boolean }[],
    platformLayers: [
      { label: 'Sources', caption: 'Shopify, Stripe, CRM, GA4, a database' },
      { label: 'Ingestion', caption: 'Airbyte' },
      { label: 'Warehouse', caption: 'BigQuery' },
      { label: 'Transformation', caption: 'Dataform or dbt: models, tests, lineage' },
      { label: 'BI', caption: 'dashboards, metrics, analysis' },
    ],
  },
  cookie: {
    label: 'Cookie consent',
    message: 'We use analytics cookies to improve your experience. You can opt out at any time.',
    accept: 'Accept',
    decline: 'Decline',
  },
};

export type UiCopy = typeof ui;
export default ui;
