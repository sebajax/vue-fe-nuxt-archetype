interface IMessages {
  USER_EXISTS: string;
  INSERT_USER_ERROR: string;
  USER_CREATED: string;
}

const messages: IMessages = {
  USER_EXISTS: 'Usuario ya existe',
  INSERT_USER_ERROR: 'Error al insertar el usuario',
  USER_CREATED: 'Usuario creado correctamente',
};

// Response type for the use case
type TypeResponseCreatePatient = {
  id: number;
  name: string;
  email: string;
};

// This function maps the response message to the user
function patientResponseMapping(key: string) {
  return messages[key as keyof IMessages];
}

export { patientResponseMapping };
export type { TypeResponseCreatePatient };
