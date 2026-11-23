// The French feed, /fr/rss.xml. A dynamic route only so it can be left out of
// builds where French isn't built (production before SHOW_FRENCH).
import type { APIContext } from 'astro';
import { buildFeed } from '../../data/rss';
import { frenchBuilt } from '../../i18n/flags';

export function getStaticPaths() {
  return frenchBuilt ? [{ params: { feed: 'rss' } }] : [];
}

export function GET(context: APIContext): Promise<Response> {
  return buildFeed('fr', context.site ?? new URL('https://nimzodata.com'));
}
