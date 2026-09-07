// Founder identity, used by the full block on About and the compact line
// attached to the CTA on the homepage and Contact. Single source so the bio,
// photo and LinkedIn URL are edited in one place.

export interface Founder {
  name: string;
  role: string;
  /** Path under /public. Null renders a neutral placeholder instead. */
  photo: string | null;
  photoAlt: string;
  linkedin: string | null;
  /** Two lines: depth of experience, then the kind of companies. */
  background: [string, string];
  /** Ties the block to the "senior engineers only" positioning. */
  seniority: string;
  /** One line, shown next to the CTA on the homepage and Contact. */
  ctaLine: string;
}

export const founder: Founder = {
  name: 'Antoine Anicotte',
  role: 'Founder',

  photo: '/images/antoine-anicotte.jpg',
  photoAlt: 'Antoine Anicotte, founder of Nimzo Data',
  linkedin: 'https://www.linkedin.com/in/antoine-anicotte/',

  background: [
    'Fifteen years in analytics and data engineering, now working exclusively on Google Cloud.',
    'Past work spans Clarins, MindsDB and Foresight Mental Health, plus the European scale-ups written up here: Aeyde and Tameson.',
  ],

  seniority:
    'Nimzo Data is deliberately small. The senior engineer who scopes your build is the one who writes it, and the one you call when something breaks.',

  ctaLine:
    "You'll talk with Antoine, founder. The person on the call is the person who builds it.",
};
