// [Imports]
// - Module
import {
  alpha,
  checkRut,
  email as emailValidator,
  maxLength,
  numeric,
  required,
} from '~/utils/validationTranslation.util';

const patientRules = {
  name: { required, maxLength: maxLength(10) },
  rut: { required, checkRut },
  age: { required, numeric },
  genre: { required, alpha },
  nationality: { required, alpha },
  address: { required },
  socialSecurity: { required, alpha },
  phone: { required, numeric },
  altPhone: { numeric },
  email: { required, email: emailValidator },
};

export { patientRules };
