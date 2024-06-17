// composables/useFormValidation.ts
import useVuelidate from '@vuelidate/core';
import {
  alpha,
  email as emailValidator,
  maxLength,
  numeric,
  required,
} from '@vuelidate/validators';

function patientValidation(formData: any) {
  const rules = {
    name: { required, maxLength: maxLength(80), alpha },
    rut: { required, maxLength: maxLength(12) },
    birthdate: { required },
    age: { required, numeric },
    genre: { required, alpha },
    nationality: { required, alpha },
    address: { required },
    socialSecurity: { required, alpha },
    phone: { required, numeric },
    altPhone: { numeric },
    email: { required, email: emailValidator },
  };

  const $v = useVuelidate(rules, formData);

  const nameRules = [
    (value: string) => {
      if (value) return true;
      return 'El campo Nombre es requerido.';
    },
    (value: string) => {
      if (value?.length <= 50) return true;
      return 'El nombre debe tener a lo más 50 caracteres.';
    },
  ];

  const emailRules = [
    (value: string) => {
      if (value) return true;
      return 'El campo Correo es requerido.';
    },
    (value: string) => {
      if (/.+@.+\..+/.test(value)) return true;
      return 'El correo debe ser uno válido.';
    },
  ];

  return {
    $v,
    nameRules,
    emailRules,
  };
}
export default patientValidation;
