import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nimzodata.com',
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
