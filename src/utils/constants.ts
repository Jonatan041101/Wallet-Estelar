export type MessageSuccessWithVariable =
  | `La cuenta ha sido activada hash:${string}`
  | `Se ha enviado ${string} a ${string}`;
export enum MessageSucces {
  COPIED_TO_CLIPBOARD = 'Copiado al portapapeles',
}
export enum MessageError {
  READ_CAREFULLY = 'Lee con atención',
  SAVE_KEYS = 'Guarde sus llaves',
  ERROR_SECRET_KEY = 'La llave secreta que ha ingresado es incorrecta',
  ERROR_PUBLIC_KEY = 'La llave publica que ha ingresado es incorrecta',
  ERROR_COPYING = 'Ocurrio un error al copiar al portapapeles ',
  INVALID_SECRET_KEY = 'La llave secreta ingresada no pertenece a una cuenta',
  ERROR_ACTIVATE_ACCOUNT = 'Ocurrio un error al querer activar su cuenta',
  INVALID_NUMBER = 'El valor ingresado no es numero',
}
export enum ERROR_CONECTION {
  STRING_IS_INVALID = 'invalid encoded string',
}
