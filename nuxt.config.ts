import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // OIDC Auth (OpenID Connect) configuration
  oidc: {
    defaultProvider: 'keycloak',
    providers: {
      keycloak: {
        clientId: '',
        clientSecret: '',
        baseUrl: '',
        redirectUri: '',
        scope: ['openid'],
        exposeAccessToken: true,
      },
    },
    session: {
      expirationCheck: false, // TODO: Check why this was causing a refreshToken error
      automaticRefresh: true,
      maxAge: 60 * 60 * 24,
    },
    middleware: {
      globalMiddlewareEnabled: false,
      customLoginPage: false,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'src/',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  plugins: [
    '~/plugins/localStorage.client.ts',
    '~/plugins/sessionStorage.client.ts',
  ],
  modules: [
    'nuxt-lodash',
    'nuxt-oidc-auth',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error because config.plugins may be undefined
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
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
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      nodeEnv: process.env.API_NAME,
      api: process.env.CLEAN_ARCHITECTURE_API,
    },
  },
});
