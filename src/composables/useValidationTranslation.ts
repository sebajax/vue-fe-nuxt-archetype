// [Imports]
import { setLocale } from 'yup';

function setLocaleTraduction (){
  return setLocale({
    mixed: {
      defined: translatedVariables.REQUIRED,
      required: translatedVariables.REQUIRED,
    },
    string: {
      email: translatedVariables.EMAIL
    }
  });
}


export { setLocaleTraduction }

