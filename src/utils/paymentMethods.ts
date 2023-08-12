import {
  sendTransactionWithAlbedo,
  sendTransactionWithPrivateKey,
} from '@/services/payment';
import { PaymentMethod } from '@/types/types';

export const paymentsMethod: PaymentMethod = {
  Albedo: sendTransactionWithAlbedo,
  'Only-Stellar': sendTransactionWithPrivateKey,
};
