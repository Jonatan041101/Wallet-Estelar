export type MessageSuccessWithVariable =
  | `La cuenta ha sido activada hash:${string}`
  | `Se ha enviado ${string} a ${string}`;
export enum MessageSucces {
  COPIED_TO_CLIPBOARD = 'Copiado al portapapeles',
  LOAD_BALANCE = 'Su saldo ha sido actualizado',
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
  ERROR_IN_TRANSACTION = 'Ocurrio un error en la transacción',
}
export enum ERROR_CONECTION {
  STRING_IS_INVALID = 'invalid encoded string',
}
export enum MessageLoad {
  TRANSACTION = 'Espere un momento a que se terminen las transacciones',
  ACTIVATE_ACOUNT = 'Esperando activación de la cuenta',
  WAIT_A_MOMENT = 'Espere un momento',
}
