interface ILabelTranslation {
  NAME: string;
  IDENTITY_NUMBER: string;
  GENRE: string;
  NATIONALITY: string;
  ADDRESS: string;
  SOCIAL_SECURITY: string;
  PHONE: string;
  ALT_PHONE: string;
  EMAIL: string;
}

// Function to return a dictionary of translated validation messages
const labelTranslation: ILabelTranslation = {
  // Returning an object with key-value pairs where key is the validation type and value is the custom message
  NAME: 'Nombre',
  IDENTITY_NUMBER: 'Rut',
  GENRE: 'Género',
  NATIONALITY: 'Nacionalidad',
  ADDRESS: 'Dirección',
  SOCIAL_SECURITY: 'Previsión',
  PHONE: 'Teléfono',
  ALT_PHONE: 'Teléfono Alternativo',
  EMAIL: 'Correo Electrónico',
};

// Other personalized messages interface goes here

export { labelTranslation };
export type { ILabelTranslation };
