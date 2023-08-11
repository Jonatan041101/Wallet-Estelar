import { TransactionError } from '@/helpers/handlerError';
import {
  sendTransactionOnlyStellar,
  sendTransactionWithAlbedo,
} from '@/services/payment';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';

export default function usePayment() {
  const { payment } = useBearStore(({ payment }) => ({ payment }));
  const handleTransaction = async (
    key: string,
    destination: string,
    amount: string,
  ) => {
    try {
      let signature: boolean = false;
      if (payment === 'Albedo') {
        const signatureTransaction = await sendTransactionWithAlbedo(
          key,
          destination,
          amount,
        );
        signature = signatureTransaction.successful;
      }
      if (payment === 'Only-Stellar') {
        const signatureTransaction = await sendTransactionOnlyStellar(
          key,
          destination,
          amount,
        );
        signature = signatureTransaction.successful;
      }
      if (!signature)
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
