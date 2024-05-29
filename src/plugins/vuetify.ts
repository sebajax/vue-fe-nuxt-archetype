// module import
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
// material design icons
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

// Vuetify custom theme
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#B684E7',
            secondary: '#4D306A',
            'light-gray': '#F4F5F6',
          },
        },
        dark: {
          colors: {
            primary: '#B684E7',
            secondary: '#4D306A',
            'light-gray': '#F4F5F6',
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });

  app.vueApp.use(vuetify);
});
