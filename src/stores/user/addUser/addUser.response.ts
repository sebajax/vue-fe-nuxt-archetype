interface Messages {
  USER_EXISTS: string;
  INSERT_USER_ERROR: string;
  CREATED: string;
}

const messages: Messages = {
  USER_EXISTS: 'Usuario ya existe',
  INSERT_USER_ERROR: 'Error al insertar el usuario',
  CREATED: 'Usuario creado correctamente',
};

export function addUserResponse(key: string) {
  return messages[key as keyof Messages];
}
