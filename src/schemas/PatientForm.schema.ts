// [Imports]
// - Module
import type { ObjectSchema } from 'yup';
import { 
  object, 
  string, 
} from 'yup';

// - Interface
import type { PatientForm } from '~/interfaces/patientForm.interface';
// [Composable]
const { validatorMsg } = useCustomMsg();

// Instantiated settings
// Dictionary translation of messages
useValidatorTranslate();

// Schema: Patient validation
const patientSchema: ObjectSchema<PatientForm> = object().shape({
  name: string().required(),
  rut: string().checkRut(validatorMsg.CHECKRUT).required(),
  genre: string().required(),
  nationality: string().required(),
  address: string().required(),
  socialSecurity: string().required(),
  phone: string().phoneNumber(validatorMsg.PHONENUMBER).required(),
  altPhone: string().nullable(),
  email: string().email().required(),
});

export { patientSchema };
