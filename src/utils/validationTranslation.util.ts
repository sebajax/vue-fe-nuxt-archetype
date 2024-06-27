// [Imports]
import {
createI18nMessage, 
required as validatorsRequired,
minLength as validatorsMinLength,
maxLength as validatorsMaxLength,
numeric as validatorsNumeric,
email as validatorsEmail,
alpha as validatorsAlpha
} from '@vuelidate/validators';
import { createI18n } from 'vue-i18n';

// Create your i18n message instance
const i18n = createI18n({
  locale: 'es',
  messages: {
    es: {
      validations: {
        required: translatedVariables.REQUIRED,
        maxLength: translatedVariables.MAXLENGTH,
        minLength: translatedVariables.MINLENGTH,
        numeric: translatedVariables.NUMERIC,
        email: translatedVariables.EMAIL,
        alpha: translatedVariables.ALPHANUM,
        //customized validators
        checkRut: translatedVariables.CHECKRUT,
      },
    },
  },
});
const t = i18n.global.t;
const withI18nMessage = createI18nMessage({ t });

// Wrap each validator
const required = withI18nMessage(validatorsRequired);
const minLength = withI18nMessage(validatorsMinLength, {
  withArguments: true,
});
const maxLength = withI18nMessage(validatorsMaxLength, {
  withArguments: true,
});
const numeric = withI18nMessage(validatorsNumeric);
const email = withI18nMessage(validatorsEmail);
const alpha = withI18nMessage(validatorsAlpha);
const checkRut = withI18nMessage(checkRutValidator);

export { alpha, checkRut, email, maxLength, minLength, numeric, required };
