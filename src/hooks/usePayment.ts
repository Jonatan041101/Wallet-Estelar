import { TransactionError } from '@/helpers/handlerError';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { paymentsMethod } from '@/utils/transactionsMethod';
import { AccountResponse } from 'stellar-sdk';

export default function usePayment() {
  const { payment } = useBearStore(({ payment }) => ({ payment }));

  const handleTransaction = async (
    account: AccountResponse,
    destination: string,
    amount: string,
  ) => {
    try {
      const transaction = await paymentsMethod[payment](
        account,
        destination,
        amount,
      );
      return transaction;
    } catch (error) {
      console.error(error);
      if (error instanceof TransactionError) {
        throw new TransactionError(error.message as MessageError);
      }
      throw new Error(MessageError.ERROR);
    }
  };
  return {
    handleTransaction,
  };
}
