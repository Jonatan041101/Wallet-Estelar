import { TransactionError } from '@/helpers/handlerError';
import {
  sendTransactionWithPrivateKey,
  sendTransactionWithAlbedo,
} from '@/services/payment';
import { Payment } from '@/store/paymentSlice';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { Horizon } from 'stellar-sdk';

type PaymentMethod = {
  [key in Payment]: (
    key: string,
    destination: string,
    amount: string,
  ) => Promise<Horizon.SubmitTransactionResponse>;
};

export default function usePayment() {
  const { payment } = useBearStore(({ payment }) => ({ payment }));
  const paymentsMethod: PaymentMethod = {
    Albedo: sendTransactionWithAlbedo,
    'Only-Stellar': sendTransactionWithPrivateKey,
  };
  const handleTransaction = async (
    key: string,
    destination: string,
    amount: string,
  ) => {
    try {
      const { successful } = await paymentsMethod[payment](
        key,
        destination,
        amount,
      );
      if (!successful)
        throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
    } catch (error) {
      console.error(error);
      if (error instanceof TransactionError) {
        throw new TransactionError(error.message as MessageError);
      }
    }
  };
  return {
    handleTransaction,
  };
}
