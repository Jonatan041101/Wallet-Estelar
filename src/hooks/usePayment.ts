import { TransactionError } from '@/helpers/handlerError';
import {
  sendTransactionOnlyStellar,
  sendTransactionWithAlbedo,
} from '@/services/payment';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { Horizon } from 'stellar-sdk';

export default function usePayment() {
  const { payment } = useBearStore(({ payment }) => ({ payment }));
  const transaction = async (
    key: string,
    destination: string,
    amount: string,
    sendTransaction: (
      key: string,
      destination: string,
      amount: string,
    ) => Promise<Horizon.SubmitTransactionResponse>,
  ): Promise<boolean> => {
    try {
      let signature: boolean = false;
      const signatureTransaction = await sendTransaction(
        key,
        destination,
        amount,
      );
      signature = signatureTransaction.successful;
      return signature;
    } catch (error) {
      throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
    }
  };
  const handleTransaction = async (
    key: string,
    destination: string,
    amount: string,
  ) => {
    try {
      let signature: boolean = false;
      if (payment === 'Albedo') {
        signature = await transaction(
          key,
          destination,
          amount,
          sendTransactionWithAlbedo,
        );
      }
      if (payment === 'Only-Stellar') {
        signature = await transaction(
          key,
          destination,
          amount,
          sendTransactionOnlyStellar,
        );
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
