// Founder identity, used by the full block on About and the compact line
// attached to the CTA on the homepage. Single source so the bio, photo and
// LinkedIn URL are edited in one place.
import { getCaseStudies } from './caseStudies';
import type { Locale } from '../i18n/locales';
import { pickCopy } from '../i18n/copy';
import { href, type RouteId } from '../i18n/routes';
import en from './founder.en';
import fr from './founder.fr';

export interface Founder {
  name: string;
  role: string;
  /** Path under /public. Null renders a neutral placeholder instead. */
  photo: string | null;
  photoAlt: string;
  /** Null hides the link. Only set this once the profile is public. */
  linkedin: string | null;
  /** Opening sentence of the bio paragraph. Used by the About block. */
  background: string;
  /**
   * One line for the author block at the foot of a blog post. Deliberately
   * separate from `background`: that sentence runs on into `recentWork` on
   * About, so the two cannot share wording without one of them reading oddly.
   */
  bylineLine: string;
  /** Runs on from `background`; the client names are appended as links. */
  recentWork: string;
  /** Case study slugs to name and link at the end of `recentWork`. */
  clientSlugs: string[];
  /** Rendered as one paragraph. Kept as sentences so one can be dropped. */
  seniority: string[];
  /** One line, shown next to the CTA on the homepage. */
  ctaLine: string;
}

const identity = {
  name: 'Antoine Anicotte',
  photo: '/images/antoine-anicotte.jpg',
  // LinkedIn canonicalises to the form without a trailing slash; using it
  // directly avoids sending every visitor through a redirect.
  linkedin: 'https://www.linkedin.com/in/antoine-anicotte',
  clientSlugs: ['aeyde', 'tameson'],
};

export function getFounder(locale: Locale): Founder {
  return { ...identity, ...pickCopy({ en, fr }, locale, 'data/founder') };
}

/** Client name + case study URL for each slug in `clientSlugs`. */
export function getFounderClients(locale: Locale): { name: string; href: string }[] {
  return identity.clientSlugs.map((slug) => {
    const cs = getCaseStudies(locale).find((c) => c.slug === slug);
    if (!cs) throw new Error(`founder.clientSlugs: no case study "${slug}"`);
    return { name: cs.client, href: href(cs.slug as RouteId, locale) };
  });
}
