import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cukaz.com.br',
  // trailingSlash: 'always', // for server
  integrations: [
        vue(),
        // mdx(),
        // sitemap()
    ]
});
