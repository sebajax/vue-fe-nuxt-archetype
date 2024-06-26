import { 
  required,  
  alpha,
  email as emailValidator,
  maxLength,
  numeric,
  checkRut  
} from '@/utils/i18-validators'

const patientRules = {
  name: { required,maxLength: maxLength(10)},
  rut: { required, checkRut },
  birthdate: {},
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