// Single source for "which posts are live, and in what order". The blog
// index, the post routes and the RSS feed all read from here so they can
// never disagree about what is published.
import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Drafts render in three places and nowhere else:
 *
 *  - `astro dev`, so a post can be read in place while it is written;
 *  - Vercel preview deployments, so a branch gives a URL that can be opened on
 *    a phone or sent to someone for a read, off the local network;
 *  - a local build run with INCLUDE_DRAFTS=1, for checking the real production
 *    output of a post before it ships.
 *
 * The production deployment is the one case that never shows them, which is
 * what keeps a draft out of the sitemap and the RSS feed. VERCEL_ENV is set by
 * Vercel itself to production, preview or development.
 */
const showDrafts =
  !import.meta.env.PROD ||
  process.env.VERCEL_ENV === 'preview' ||
  process.env.INCLUDE_DRAFTS === '1';

/** Published posts, newest first. Drafts included where `showDrafts` says so. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) =>
    showDrafts ? true : data.draft === false
  );

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

/** Internal URL for a post. Trailing slash, like every other link on the site. */
export function postUrl(post: BlogPost): string {
  return `/blog/${post.id}/`;
}

/** "12 March 2026". Long month, no ordinal, no weekday. */
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** YYYY-MM-DD, for <time datetime> and JSON-LD. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
