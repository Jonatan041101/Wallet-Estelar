export type MessageSuccessWithVariable =
  `La cuenta ha sido activada hash:${string}`;
export enum MessageSucces {
  COPIED_TO_CLIPBOARD = 'Copiado al portapapeles',
}
export enum MessageError {
  READ_CAREFULLY = 'Lee con atención',
  SAVE_KEYS = 'Guarde sus llaves',
  ERROR_SECRET_KEY = 'La llave secreta que a ingresado es incorrecta',
  ERROR_COPYING = 'Ocurrio un error al copiar al portapapeles ',
  INVALID_SECRET_KEY = 'La llave secreta ingresada no pertenece a una cuenta',
  ERROR_ACTIVATE_ACCOUNT = 'Ocurrio un error al querer activar su cuenta',
}
