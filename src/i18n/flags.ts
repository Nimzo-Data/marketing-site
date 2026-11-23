import { SHOW_FRENCH } from '../data/siteConfig';

/**
 * Whether French pages are generated in this build. Mirrors the draft rule in
 * src/data/blog.ts: always in `astro dev`, on Vercel preview deployments, and
 * locally with INCLUDE_FRENCH=1; in production only once SHOW_FRENCH is true.
 */
export const frenchBuilt: boolean =
  SHOW_FRENCH ||
  !import.meta.env.PROD ||
  process.env.VERCEL_ENV === 'preview' ||
  process.env.INCLUDE_FRENCH === '1';
