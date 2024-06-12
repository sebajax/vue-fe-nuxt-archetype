// composables/useFormValidation.ts

import useVuelidate from '@vuelidate/core';
import {
  required,
  maxLength,
  email as emailValidator,
  alpha,
} from '@vuelidate/validators';

// TODO: use the correct form interface instead of any
function userFormValidation(formData: any) {
  const rules = {
    name: { required, maxLength: maxLength(80), alpha },
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
export default userFormValidation;
