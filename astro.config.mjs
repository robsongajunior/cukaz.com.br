import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

const productionBuild = import.meta.env.PROD;

export default defineConfig({
  site: 'https://www.cukaz.com.br',
  trailingSlash: 'always',
  compressHTML: productionBuild ? true : false,
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    vue({
      appEntrypoint: '/src/vue.config.js'
    })
  ],
  vite: {
    ssrBuild: true,
    server: {
      fs: {
        allow: ['..']
      }
    },
    plugins: [],
    ssr: {
      noExternal: [
        '@astrojs/vue',
        // '@aziontech/webkit'
      ],
      external: [
        // 'algoliasearch',
        // 'instantsearch.js',
        // 'vue-instantsearch/vue3/es',
      ]
    }
  }
});