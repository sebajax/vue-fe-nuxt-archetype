interface IMessageTranslation {
  CHECK_PHONE_NUMBER: string;
  CHECK_IDENTITY_NUMBER: string;
}

// Function to return a dictionary of translated validation messages
const messageTranslation: IMessageTranslation = {
  // Returning an object with key-value pairs where key is the validation type and value is the custom message
  CHECK_PHONE_NUMBER: 'Formato de número incorrecto',
  CHECK_IDENTITY_NUMBER:
    'Formato invalido (ingrese rut sin puntos y con guión)',
};

// Other personalized messages interface goes here

export { messageTranslation };
export type { IMessageTranslation };
