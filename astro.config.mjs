import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SHOW_BLOG } from './src/data/siteConfig';

export default defineConfig({
  site: 'https://nimzodata.com',
  // Canonicals, the sitemap and every internal link use trailing slashes;
  // vercel.json trailingSlash:true redirects the bare form to match.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // While the blog is unannounced its URLs stay out of the sitemap.
      // Flipping SHOW_BLOG lets the index and every published post in. Drafts
      // are never built in production, so they cannot appear either way.
      filter: (page) =>
        SHOW_BLOG || !page.startsWith('https://nimzodata.com/blog/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
