import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nimzodata.com',
  // Canonicals, the sitemap and every internal link use trailing slashes;
  // vercel.json trailingSlash:true redirects the bare form to match.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://nimzodata.com/blog/' &&
        !page.startsWith('https://nimzodata.com/blog/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
