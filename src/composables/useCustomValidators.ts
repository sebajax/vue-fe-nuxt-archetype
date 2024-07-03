// [Imports]
// - Module
import type { StringSchema } from 'yup';
import { addMethod, string } from 'yup';

// Extend Yup to include custom methods
declare module 'yup' {
  interface StringSchema {
    checkRut(message: string): StringSchema;
    phoneNumber(message: string): StringSchema;
  }
}

/* declare module 'yup' {
  interface StringSchema<
    TType extends string | undefined = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends StringSchema<TType, TContext, TOut> {
    checkRut(message: string): this;
    phoneNumber(message: string): this;
  }
} */

function useCustomValidators() {
  // Custom method: checkRut
  addMethod<StringSchema>(string, 'checkRut', function (message) {
    return this.test('checkRut', message, function (value) {
      const { path, createError } = this;
      if (typeof value !== 'string') {
        return createError({ path, message });
      }
      const isValidRut = checkRutValidator(value);
      return isValidRut || createError({ path, message });
    });
  });

  // Custom method: phoneNumber
  addMethod<StringSchema>(string, 'phoneNumber', function (message) {
    return this.test('phoneNumber', message, function (value) {
      const { path, createError } = this;
      const phoneNumberRegex = /^\+56\d{9}$/;
      if (typeof value !== 'string' || !phoneNumberRegex.test(value)) {
        return createError({ path, message });
      }
      return true;
    });
  });

  // Add other validation...
}

export { useCustomValidators };
