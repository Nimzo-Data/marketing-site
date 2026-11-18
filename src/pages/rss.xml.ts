import type { APIContext } from 'astro';
import { buildFeed } from '../data/rss';

export function GET(context: APIContext): Promise<Response> {
  return buildFeed('en', context.site ?? new URL('https://nimzodata.com'));
}
