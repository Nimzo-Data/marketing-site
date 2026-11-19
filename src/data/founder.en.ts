// Founder text. Identity fields (name, photo, LinkedIn, clients) are in founder.ts.
const copy = {
  role: 'Founder',
  photoAlt: 'Antoine Anicotte, founder of Nimzo Data',
  background:
    'Fifteen years in analytics and data engineering, across Europe, Asia and the US, now exclusively on Google Cloud.',
  bylineLine:
    'Fifteen years in analytics and data engineering, twelve of them on Google Cloud, in-house and freelance across Europe, Asia and the US.',
  recentWork:
    'Recent work: European e-commerce companies, consumer and industrial, including',
  // "No handoff to a team you never saw on a call" was dropped here: it made
  // the same promise as the sentence before it, and four sentences read heavy
  // in the block.
  seniority: [
    'Nimzo Data is deliberately small.',
    'Antoine scopes every project and stays accountable for it end to end.',
    "Anyone who works on your platform, you've met.",
  ],
  ctaLine:
    "You'll talk with Antoine, the founder. The person on the call is the person accountable for the work.",
};

export type FounderCopy = typeof copy;
export default copy;
