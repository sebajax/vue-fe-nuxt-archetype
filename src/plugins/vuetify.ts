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
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#B684E7',
            secondary: '#4D306A',
            'light-gray': '#F4F5F6',
            'dark-text': '#282828',
            title: '#B684E7',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#4D306A',
            secondary: '#B684E7',
            'light-gray': '#F4F5F6',
            title: '#B684E7',
            'dark-text': '#F4F5F6',
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
