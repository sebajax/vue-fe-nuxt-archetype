// [Imports]
// - Module
import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';
// - Interface
import { messageTranslation } from '~/interfaces/composables/customValidators.interface';
import { labelTranslation } from '~/interfaces/composables/schemas/patientFormSchema.interface';
import type { IPatient } from '~/interfaces/domain/patient.domain';

// Schema for Patient Form
export const usePatientFormSchema = () => {
  const patientSchema: ObjectSchema<IPatient> = object().shape({
    name: string().required().label(labelTranslation.NAME),
    identityNumber: string()
      .checkIdentityNumber(messageTranslation.CHECK_IDENTITY_NUMBER)
      .required()
      .label(labelTranslation.IDENTITY_NUMBER),
    genre: string().required().label(labelTranslation.GENRE),
    nationality: string().required().label(labelTranslation.NATIONALITY),
    address: string().required().label(labelTranslation.ADDRESS),
    socialSecurity: string().required().label(labelTranslation.SOCIAL_SECURITY),
    phone: string()
      .checkIdentityNumber(messageTranslation.CHECK_PHONE_NUMBER)
      .required()
      .label(labelTranslation.PHONE),
    altPhone: string().nullable().label(labelTranslation.ALT_PHONE),
    email: string().email().required().label(labelTranslation.EMAIL),
  });

  return { patientSchema };
};
