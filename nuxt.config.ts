import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  css: ['~/assets/styles/main.scss'],
  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/user/user.provider'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  pinia: {
    storesDirs: ['~/stores', '~/stores/**', '~/stores/**/**'],
  },
});
