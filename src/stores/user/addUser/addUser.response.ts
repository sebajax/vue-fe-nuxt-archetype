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
type TResponseAddUser = {
  id: number;
  name: string;
  email: string;
};

function addUserResponse(key: string) {
  return messages[key as keyof IMessages];
}

export { addUserResponse };
export type { TResponseAddUser };
