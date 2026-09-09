import type { APIContext } from 'astro';
import { getPublishedPosts, postUrl } from '../data/blog';

// Hand-rolled rather than pulling in @astrojs/rss: the feed carries four
// fields per post and nothing that a dependency would do better.
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(context: APIContext): Promise<Response> {
  const site = context.site ?? new URL('https://nimzodata.com');
  const absolute = (path: string) => new URL(path, site).href;

  const posts = await getPublishedPosts();

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
    <title>Nimzo Data Blog</title>
    <link>${absolute('/blog/')}</link>
    <description>Data engineering articles from Nimzo Data. BigQuery optimization, Dataform modeling, GCP architecture, and lessons from real client engagements.</description>
    <language>en</language>
    <atom:link href="${absolute('/rss.xml')}" rel="self" type="application/rss+xml" />
${lastBuildDate ? `    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n` : ''}${items}${items ? '\n' : ''}  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
