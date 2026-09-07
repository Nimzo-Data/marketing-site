// Founder identity, used by the full block on About and the compact line
// attached to the CTA on the homepage. Single source so the bio, photo and
// LinkedIn URL are edited in one place.
import { caseStudies } from './caseStudies';

export interface Founder {
  name: string;
  role: string;
  /** Path under /public. Null renders a neutral placeholder instead. */
  photo: string | null;
  photoAlt: string;
  /** Null hides the link. Only set this once the profile is public. */
  linkedin: string | null;
  /** Opening sentence of the bio paragraph. */
  background: string;
  /** Runs on from `background`; the client names are appended as links. */
  recentWork: string;
  /** Case study slugs to name and link at the end of `recentWork`. */
  clientSlugs: string[];
  /** Rendered as one paragraph. Kept as sentences so one can be dropped. */
  seniority: string[];
  /** One line, shown next to the CTA on the homepage. */
  ctaLine: string;
}

export const founder: Founder = {
  name: 'Antoine Anicotte',
  role: 'Founder',

  photo: '/images/antoine-anicotte.jpg',
  photoAlt: 'Antoine Anicotte, founder of Nimzo Data',

  // LinkedIn canonicalises to the form without a trailing slash; using it
  // directly avoids sending every visitor through a redirect.
  linkedin: 'https://www.linkedin.com/in/antoine-anicotte',

  background:
    'Fifteen years in analytics and data engineering, across Europe and the US, now exclusively on Google Cloud.',
  recentWork:
    'Recent work: European e-commerce companies, consumer and industrial, including',
  clientSlugs: ['aeyde', 'tameson'],

  // "No handoff to a team you never saw on a call" was dropped here: it made
  // the same promise as the sentence before it, and four sentences read heavy
  // in the block.
  seniority: [
    'Nimzo Data is deliberately small.',
    'Antoine scopes every project and stays accountable for it end to end.',
    "Anyone who works on your platform, you've met.",
  ],

  ctaLine:
    "You'll talk with Antoine, founder. The person on the call is the person accountable for the build.",
};

/** Client name + case study URL for each slug in `clientSlugs`. */
export const founderClients = founder.clientSlugs.map((slug) => {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) throw new Error(`founder.clientSlugs: no case study "${slug}"`);
  return { name: cs.client, href: `/case-studies/${cs.slug}/` };
});
