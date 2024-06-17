// Module import
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
// Material design icons
import '@mdi/font/css/materialdesignicons.css';
// Interface import
import { EnumTheme } from '~/interfaces/theme.interface';

// Custom theme light
const customLightTheme = {
  dark: false,
  colors: {
    background: '#eee',
    primary: '#4D306A',
    secondary: '#B684E7',
    title: '#B684E7',
    'light-gray': '#F4F5F6',
    'dark-text': '#282828',
  },
};

// Custom theme dark
const customDarkTheme = {
  dark: true,
  colors: {
    background: '#15202b',
    primary: '#4D306A',
    secondary: '#B684E7',
    title: '#B684E7',
    'light-gray': '#212121',
    'dark-text': '#F4F5F6',
  },
};

// Vuetify themes [light, dark]
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: EnumTheme.LIGHT,
      themes: {
        light: customLightTheme,
        dark: customDarkTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
    },
  });

  app.vueApp.use(vuetify);
});
