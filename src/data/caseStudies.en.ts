// Case study text, keyed by slug. Logos, tools, people and links are in caseStudies.ts.
const copy = {
  aeyde: {
    headline:
      'How Aeyde made Looker dashboards load in seconds, cut data infrastructure costs by 77%, and rebuilt trust in their numbers',
    subline:
      "Five years of organic growth had stretched Aeyde's data stack across multiple systems, slowing reporting and complicating decisions.",
    company: { size: '10–50 employees', sector: 'Footwear & accessories (D2C + B2B)' },
    service: {
      label: 'Build',
      shortDescription:
        'A new Google Cloud data platform, or a replacement for one that has to go. Old and new run in parallel until the numbers match.',
    },
    shortQuote: {
      text: 'Dashboards that used to take minutes now load in seconds, and the whole team has real trust in the data again.',
      authorTitle: 'BI Lead, Aeyde',
      /** Set in French copy: the quote was given in English and is shown translated. */
      translatedFrom: undefined as 'en' | undefined,
    },
  },
  tameson: {
    headline:
      'How Tameson turned unused BigQuery data into a foundation for analytics across 6 markets',
    subline:
      'Pipelines were running and data was landing in BigQuery, but most of it sat unmodeled and unused.',
    company: { size: '10–50 employees', sector: 'Industrial supply e-commerce' },
    service: {
      label: 'Improve',
      shortDescription:
        "Add the layer that's missing or fix the one that isn't working, one fixed-price project at a time, alongside the team you already have.",
    },
    shortQuote: {
      text: "Most of our BigQuery data wasn't usable for analysis. Now it's the platform our analytics actually run on.",
      authorTitle: 'CTO, Tameson',
      /** Set in French copy: the quote was given in English and is shown translated. */
      translatedFrom: undefined as 'en' | undefined,
    },
  },
};

export type CaseStudiesCopy = typeof copy;
export default copy;
