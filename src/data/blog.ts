// Single source for "which posts are live, and in what order". The blog
// index, the post routes and the RSS feed all read from here so they can
// never disagree about what is published.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/locales';
import { formatDate } from '../i18n/format';
import { SHOW_FRENCH } from './siteConfig';
import { findUnpairedPosts } from './blog-pairs';

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

/** 'fr' for posts under src/blog/fr/, 'en' otherwise. */
export function postLocale(post: BlogPost): Locale {
  return post.id.startsWith('fr/') ? 'fr' : 'en';
}

/** The URL slug: the filename, without the fr/ folder. */
export function postSlug(post: BlogPost): string {
  return post.id.replace(/^fr\//, '');
}

/**
 * Published posts in one language, newest first. Drafts included where
 * `showDrafts` says so. Once French is live, the build stops on any post whose
 * other-language version is missing or not published at the same time.
 */
export async function getPublishedPosts(locale: Locale = 'en'): Promise<BlogPost[]> {
  if (SHOW_FRENCH) {
    const all = await getCollection('blog');
    const unpaired = findUnpairedPosts(
      all.map((p) => ({ id: p.id, draft: p.data.draft, translationOf: p.data.translationOf }))
    );
    if (unpaired.length) throw new Error(`Unpaired blog posts: ${unpaired.join(', ')}`);
  }

  const posts = await getCollection('blog', ({ data }) =>
    showDrafts ? true : data.draft === false
  );

  return posts
    .filter((post) => postLocale(post) === locale)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Internal URL for a post. Trailing slash, like every other link on the site. */
export function postUrl(post: BlogPost): string {
  return postLocale(post) === 'fr' ? `/fr/blog/${postSlug(post)}/` : `/blog/${post.id}/`;
}

/** The post's URL in each language, when its other-language version exists. */
export function postAlternates(post: BlogPost, all: BlogPost[]): Record<Locale, string> | undefined {
  const other =
    postLocale(post) === 'en'
      ? all.find((p) => postLocale(p) === 'fr' && p.data.translationOf === post.id)
      : all.find((p) => postLocale(p) === 'en' && p.id === post.data.translationOf);
  if (!other) return undefined;
  const [en, fr] = postLocale(post) === 'en' ? [post, other] : [other, post];
  return { en: postUrl(en), fr: postUrl(fr) };
}

/** "12 March 2026" / "12 mars 2026". Long month, no ordinal, no weekday. */
export function formatPostDate(date: Date, locale: Locale = 'en'): string {
  return formatDate(date, locale);
}

/** YYYY-MM-DD, for <time datetime> and JSON-LD. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
