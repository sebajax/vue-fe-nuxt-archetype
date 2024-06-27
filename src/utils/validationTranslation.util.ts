import * as validators from '@vuelidate/validators';
import { createI18n } from 'vue-i18n';

const { createI18nMessage } = validators;
// Create your i18n message instance
const i18n = createI18n({
  locale: 'es',
  messages: {
    es: {
      validations: {
        required: values.REQUIRED,
        maxLength: values.MAXLENGTH,
        minLength: values.MINLENGTH,
        numeric: values.NUMERIC,
        email: values.EMAIL,
        alpha: values.ALPHANUM,
        //customized validators
        checkRut: values.CHECKRUT,
      },
    },
  },
});
const t = i18n.global.t;
const withI18nMessage = createI18nMessage({ t });

// Wrap each validator
const required = withI18nMessage(validators.required);
const minLength = withI18nMessage(validators.minLength, {
  withArguments: true,
});
const maxLength = withI18nMessage(validators.maxLength, {
  withArguments: true,
});
const numeric = withI18nMessage(validators.numeric);
const email = withI18nMessage(validators.email);
const alpha = withI18nMessage(validators.alpha);
const checkRut = withI18nMessage(checkRutValidator);

export { alpha, checkRut, email, maxLength, minLength, numeric, required };
