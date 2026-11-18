// One RSS feed per language: /rss.xml and /fr/rss.xml.
// Hand-rolled rather than pulling in @astrojs/rss: the feed carries four
// fields per post and nothing that a dependency would do better.
import type { Locale } from '../i18n/locales';
import { href } from '../i18n/routes';
import { t } from '../i18n/ui';
import { getPublishedPosts, postUrl } from './blog';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function buildFeed(locale: Locale, site: URL): Promise<Response> {
  const absolute = (path: string) => new URL(path, site).href;
  const ui = t(locale).site;
  const posts = await getPublishedPosts(locale);
  const feedPath = locale === 'fr' ? '/fr/rss.xml' : '/rss.xml';

  const items = posts
    .map((post) => {
      const link = absolute(postUrl(post));
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  // Dated from the newest post rather than the build clock, so rebuilding
  // without publishing does not look like new content to a reader.
  const lastBuildDate = posts[0]?.data.pubDate.toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(ui.rssTitle)}</title>
    <link>${absolute(href('blog', locale))}</link>
    <description>${escapeXml(ui.rssDescription)}</description>
    <language>${locale}</language>
    <atom:link href="${absolute(feedPath)}" rel="self" type="application/rss+xml" />
${lastBuildDate ? `    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n` : ''}${items}${items ? '\n' : ''}  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
