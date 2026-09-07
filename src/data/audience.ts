// Audience qualifiers shown in the "Who we work with" split on the homepage and
// About. Both pages render the same two lists, so they live here rather than
// being maintained in parallel.

export const isForItems: string[] = [
  "You're on Google Cloud, or planning to be.",
  'You\'re past the "spreadsheet era" and need a real platform.',
  'You have analysts, not data engineers. Or no team at all.',
  'You need senior data engineering, not a full-time hire.',
  "You want AI to answer your team's data questions accurately.",
  'You can get a decision made. Our best engagements start in two-week sales cycles, not four-month ones.',
];

export const isNotForItems: string[] = [
  "You need AWS or Azure. We don't do multi-cloud.",
  "You're pre-product-market-fit. Data isn't your bottleneck yet.",
  "You need analysts or data scientists. We're data engineers.",
  'You want the cheapest hourly rate available. We compete on seniority, not price.',
  'You need real-time streaming at scale (Kafka, Flink, sub-second latency). Different specialism.',
];
