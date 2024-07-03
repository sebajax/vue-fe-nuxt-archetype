import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/*.{ts,js,mjs,mts}',
    ],
  },
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
  css: ['~/assets/styles/main.css'],
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
    '~/plugins/translationConfig.client.ts',
  ],
  modules: [
    'nuxt-lodash',
    'nuxt-oidc-auth',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
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
    storesDirs: ['./src/stores/', './src/stores/**', './src/stores/**/**'],
  },
  /*
  typescript: {
    typeCheck: true,
  },
  */
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      language: process.env.LANGUAGE,
      nodeEnv: process.env.API_NAME,
      api: process.env.CLEAN_ARCHITECTURE_API,
    },
  },
});
