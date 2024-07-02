// [Imports]
// - Module
/* import {
  alpha,
  checkRut,
  email as emailValidator,
  maxLength,
  numeric,
  required,
} from '~/utils/validationTranslation.util';
*/

import { object, string, number } from 'yup';

  //importar desde composable
  //{ setLocaleTraduction } = useValidationTraslation();

  const patientSchema = object({
    name: string().required(),
    rut: number().required(), //added custom check-rut
    genre: string().required(),
    nationality: string().nullable(),
    address: string().required(),
    socialSecurity: string().required(),
    phone: number().required(),
    altPhone: number().required(),
    email: string().email().required(),
  });

export { patientSchema }; 
