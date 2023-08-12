import {
  sendTransactionWithAlbedo,
  sendTransactionWithPrivateKey,
} from '@/services/payment';
import {
  signTransactionWithAlbedo,
  signTransactionWithPrivateKey,
} from '@/services/signIn';
import { PaymentMethod, SingInTransaction } from '@/types/types';

export const paymentsMethod: PaymentMethod = {
  Albedo: sendTransactionWithAlbedo,
  'Only-Stellar': sendTransactionWithPrivateKey,
};
export const signInTransaction: SingInTransaction = {
  Albedo: signTransactionWithAlbedo,
  'Only-Stellar': signTransactionWithPrivateKey,
};
