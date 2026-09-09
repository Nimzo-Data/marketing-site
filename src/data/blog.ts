// Single source for "which posts are live, and in what order". The blog
// index, the post routes and the RSS feed all read from here so they can
// never disagree about what is published.
import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Published posts, newest first.
 *
 * Drafts are dropped from production builds only: `astro dev` shows them so a
 * post can be read in place before it ships. Because a draft never gets built
 * in production, it cannot reach the sitemap or the RSS feed either.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? data.draft === false : true
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
