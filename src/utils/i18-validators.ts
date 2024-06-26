import * as validators from '@vuelidate/validators'
import { createI18n } from "vue-i18n"
//personalised message dictionary
import { values } from '@/composables/useCustomMsgVuelidate.composable';
//imports customised validators
import { checkRutValidator } from '~/helpers/validators/rut.validator';

const { createI18nMessage } = validators
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
        //customised validators
        checkRut : values.CHECKRUT,
      }
    }
  }
})
const t = i18n.global.t
const withI18nMessage = createI18nMessage({ t })

// wrap each validator
export const required = withI18nMessage(validators.required)
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true })
export const numeric = withI18nMessage(validators.numeric)
export const email = withI18nMessage(validators.email)
export const alpha = withI18nMessage(validators.alpha)
//customised validator is exported
export const checkRut = withI18nMessage(checkRutValidator)