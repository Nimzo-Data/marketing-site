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
    'Fifteen years in analytics and data engineering, across Europe and the US, now working exclusively on Google Cloud.',
    'Recent work is with European e-commerce scale-ups, consumer and industrial, including Aeyde and Tameson.',
  ],

  seniority:
    "Nimzo Data is deliberately small. The senior engineer who scopes your project stays on it, and you're never handed to a junior team you didn't meet on the call.",

  ctaLine:
    "You'll talk with Antoine, the founder. Not a salesperson, and not a junior team.",
};
