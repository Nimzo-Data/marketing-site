import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nimzodata.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/blog/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
