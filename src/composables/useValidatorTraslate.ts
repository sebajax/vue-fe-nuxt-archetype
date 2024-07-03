// [Imports]
import { setLocale } from 'yup';
// [Composable]
const { validatorMsg } = useCustomMsg();

// Instantiated settings
// Custom methods yup
useCustomValidators();

function useValidatorTranslate() {
  return setLocale({
    mixed: {
      default: validatorMsg.DEFAULT,
      required: validatorMsg.REQUIRED,
    },
    string: {
      min: validatorMsg.MINLENGTH,
      max: validatorMsg.MAXLENGTH,
      email: validatorMsg.EMAIL,
      lowercase: validatorMsg.LOWERCASE,
      uppercase: validatorMsg.UPPERCASE,
/*       checkRut: validatorMsg.CHECKRUT,
      phoneNumber: validatorMsg.PHONENUMBER, */
    },
    number: {
      min: validatorMsg.MINVALUE,
      integer: validatorMsg.INTEGER,
    },
  });
}

export { useValidatorTranslate };

