import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SHOW_BLOG, SHOW_FRENCH } from './src/data/siteConfig';
import { remarkFrenchTypography } from './src/i18n/remark-french';

export default defineConfig({
  site: 'https://nimzodata.com',
  // Canonicals, the sitemap and every internal link use trailing slashes;
  // vercel.json trailingSlash:true redirects the bare form to match.
  trailingSlash: 'always',
  // French posts get French non-breaking spaces (src/i18n/remark-french.ts).
  markdown: {
    remarkPlugins: [remarkFrenchTypography],
  },
  integrations: [
    // Posts are .md by default; .mdx only where one needs a component.
    mdx(),
    sitemap({
      // While the blog is unannounced its URLs stay out of the sitemap.
      // Flipping SHOW_BLOG lets the index and every published post in. Drafts
      // are never built in production, so they cannot appear either way.
      // French pages join the sitemap only once SHOW_FRENCH launches them,
      // even on preview builds where they are generated for review.
      filter: (page) =>
        (SHOW_FRENCH || !page.startsWith('https://nimzodata.com/fr/')) &&
        (SHOW_BLOG ||
          !(page.startsWith('https://nimzodata.com/blog/') ||
            page.startsWith('https://nimzodata.com/fr/blog/'))),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
