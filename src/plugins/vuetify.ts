// [Imports]
// - Modules
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
// - Material design icons
import '@mdi/font/css/materialdesignicons.css';
// - Interface
import { EnumTheme } from '~/interfaces/theme.interface';

// Custom theme light
const customLightTheme = {
  dark: false,
  colors: {
    primary: '#B684E7',
    secondary: '#B684E7',
    title: '#B684E7',
    'light-gray': '#F4F5F6',
    'dark-text': '#282828',
    error: '#CF142B',
    success:'#35A644',
    alert:'#FFC72C',
    warning:'#FB8C00',
    info:'#7B3EB9',
    'blue-falp': '#004990'
  },
};

// Custom theme dark
const customDarkTheme = {
  dark: true,
  colors: {
    primary: '#4D306A',
    secondary: '#B684E7',
    title: '#B684E7',
    'light-gray': '#212121',
    'dark-text': '#F4F5F6',
    error: '#CF142B',
    success:'#35A644',
    alert:'#FFC72C',
    warning:'#FB8C00',
    info:'#7B3EB9',
    'blue-falp': '#004990'
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
