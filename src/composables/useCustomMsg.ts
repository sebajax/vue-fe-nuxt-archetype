// [Imports]
// - Interface
import type { ValidatorMsg } from '~/interfaces/validatorMsg.interface';

function useCustomMsg(): { validatorMsg: ValidatorMsg } {
  // Translated validation dictionary
  const validatorMsg = {
    DEFAULT: 'Campo inválido',
    REQUIRED: 'Este campo es requerido',
    INTEGER: 'Solo pueden ser números',
    MAXLENGTH: 'Máximo de caracteres permitidos',
    ALPHANUM: 'Solo se aceptan caracteres alphanuméricos',
    EMAIL: 'Formato de email invalido',
    MINLENGTH: 'Muy pocos caracteres',
    MINVALUE: 'El número debe ser mayor',
    UPPERCASE: 'Falta una mayúscula',
    LOWERCASE: 'Falta minúscula',
    PHONENUMBER: 'Formato de número incorrecto',
    CHECKRUT: 'Formato invalido (ingrese rut sin puntos y con guión)',
  };

  // Other personalised messages...

  return { validatorMsg };
}

export { useCustomMsg };
