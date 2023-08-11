import { ValidationError } from '@/helpers/handlerError';
import { MessageError } from './constants';
import { VALIDATIONS } from './regExp';

export const isNumberValidate = (amount: string) => {
  if (isNaN(Number(amount)) || amount.length === 0) {
    throw new ValidationError(MessageError.INVALID_NUMBER);
  }
};
export const isPublicKey = (publicKey: string) => {
  if (!VALIDATIONS.publicKey.test(publicKey)) {
    throw new ValidationError(MessageError.ERROR_PUBLIC_KEY);
  }
};
