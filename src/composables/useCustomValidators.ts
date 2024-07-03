// [Imports]
// - Module
import type { StringSchema } from 'yup';
import { addMethod, string } from 'yup';

// Extend Yup to include custom methods
declare module 'yup' {
  interface StringSchema {
    checkIdentityNumber(message: string): StringSchema;
    checkPhoneNumber(message: string): StringSchema;
  }
}

// Define a function to add custom validators to Yup
export const useCustomValidators = () => {
  // Custom method for validating a Chilean identity number (RUT)
  addMethod<StringSchema>(
    string,
    'checkIdentityNumber',
    function (message: string) {
      return this.test('checkIdentityNumber', message, function (value) {
        const { path, createError } = this;
        if (typeof value !== 'string') {
          return createError({ path, message });
        }
        const isValidRut = checkRutValidator(value);
        // Return true if valid, otherwise create an error
        return isValidRut || createError({ path, message });
      });
    },
  );

  // Custom method for validating a Chilean phone number
  addMethod<StringSchema>(
    string,
    'checkPhoneNumber',
    function (message: string) {
      return this.test('checkPhoneNumber', message, function (value) {
        const { path, createError } = this;
        const phoneNumberRegex = /^\+56\d{9}$/;
        if (typeof value !== 'string' || !phoneNumberRegex.test(value)) {
          return createError({ path, message });
        }
        return true;
      });
    },
  );

  // Add other custom validators here
};
