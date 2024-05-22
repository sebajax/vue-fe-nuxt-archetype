// module import
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

// Vuetify custom theme
const customTheme = {
  themes: {
    dark: {
      primary: '#33c',
      accent: '#33c',
      secondary: '#33c',
      info: '#33c',
      warning: '#33c',
      error: '#33c',
      success: '#33c',
    },
    light: {
      primary: '#3fd',
      accent: '#3fd',
      secondary: '#3fd',
      info: '#3fd',
      warning: '#3fd',
      error: '#3fd',
      success: '#3fd',
    },
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: customTheme,
    },
  });

  app.vueApp.use(vuetify);
});
