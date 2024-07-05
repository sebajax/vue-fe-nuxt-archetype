// [Imports]
// - Modules
import { setLocale } from 'yup';
import { en, es } from 'yup-locales';

export default defineNuxtPlugin({
  name: 'translationConfig',
  hooks: {
    'app:created'() {
      const runtimeConfig = useRuntimeConfig();
      // Load custom validators for the project
      useCustomValidators();
      switch (runtimeConfig.public.language) {
        case 'en':
          setLocale(en);
          break;
        default:
          setLocale(es);
          break;
      }
    },
  },
});
