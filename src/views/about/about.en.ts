const copy = {
  procurementFacts: [
  { label: 'Legal entity', value: 'Nimzo Data SARL, registered in France' },
  { label: 'SIRET', value: '994 080 497 00013' },
  { label: 'VAT number', value: 'FR74994080497' },
  {
    label: 'Professional liability',
    value: 'Insured with Beazley, €500,000 cover. Certificate available on request.',
  },
  { label: 'Data processing agreement', value: 'Available on request' },
  { label: 'Data residency', value: 'EU by default' },
  {
    label: 'Invoicing',
    value: 'In euros by default, by bank transfer. GBP and USD possible on request.',
  },
  { label: 'Working languages', value: 'English and French' },
  { label: 'Business hours', value: 'Monday to Friday, 9:00 to 18:00 Paris time' },
],
  principles: [
  {
    icon: 'compass',
    title: 'Execution-led, not embedded',
    body: "We lead the technical work. Your team joins reviews and can take on parts when it makes sense. No daily standups, no full embed.",
  },
  {
    icon: 'database',
    title: 'Infrastructure first, insights second',
    body: "Dashboards are only as good as the data feeding them. AI features are no different. They need governed data models to be accurate. We start with the foundation.",
  },
  {
    icon: 'target',
    title: 'One cloud, by design',
    body: "We only build on GCP. One cloud means we know it in depth; a consultancy spread across three knows each one less well.",
  },
  {
    icon: 'tag',
    title: 'Transparent pricing, defined scope',
    body: "Data consulting has a reputation for ballooning engagements. Fixed prices, ranges published on our service pages, no upsells on work you don't need.",
  },
  {
    icon: 'message-square',
    title: 'European sensibility, direct communication',
    body: "Based in France, working across Europe. No jargon, short sentences.",
  },
  {
    icon: 'graduation-cap',
    title: 'Capable teams over dependent clients',
    body: "Every project ends with documentation and a clean handover. Your team understands what we built and why. If you outgrow us, that's a success.",
  },
] as Array<{ icon: 'compass' | 'database' | 'target' | 'tag' | 'message-square' | 'graduation-cap'; title: string; body: string }>,
  existsHeading: "Why Nimzo Data exists.",
  reason1Title: "A gap in the market",
  reason1Body: "A 40-person company with one analyst needs a data platform and has nobody to build it. Large consultancies price that work for enterprise budgets, and a full-time senior hire is more than the job requires. We do it as a fixed-price project, sized for a team of zero or one.",
  reason2Title: "A narrow focus",
  reason2Body: "GCP, because BigQuery is a warehouse a company can run with no data person: there is no cluster to administer or tune. Fixed-price, because hourly billing rewards the wrong behavior. No sales layer: the person on the call is the person accountable for the work.",
  reason3Title: "Small by choice",
  reason3Body: "We take on few clients at a time, so we stay available to each one.",
  nameBody: "Nimzo Data is named after the Nimzo-Indian Defence, where Black gives up the bishop pair, a visible advantage, for a structural edge that lasts the rest of the game. We build the same way: the foundation nobody sees is worth more than the dashboard everybody does.",
  founderHeading: "Who runs Nimzo Data.",
  principlesHeading: "How we work.",
  procurementHeading: "For your procurement team.",
  procurementFooter: "Anything else your vendor onboarding needs, ask on the call and we'll send it over.",
  metaTitle: "About | Boutique GCP Data Consultancy | Nimzo Data",
  metaDescription: "Boutique Google Cloud data consultancy based in France. Data platforms for growing European companies. Paid audits, fixed-price builds, senior engineering only.",
  heroTitle: "A boutique data consultancy.<br>That stays that way.",
  heroSubtitle: "Small firm, one cloud, paid audits and fixed-price builds.<br>We work with a handful of clients at a time and go deep.",
  heroCta: "Let's talk",
  nameTitle: "Why Nimzo?",
};

export type Copy = typeof copy;
export default copy;
