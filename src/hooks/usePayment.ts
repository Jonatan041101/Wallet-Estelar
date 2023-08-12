import { TransactionError } from '@/helpers/handlerError';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { paymentsMethod } from '@/utils/paymentMethods';

export default function usePayment() {
  const { payment } = useBearStore(({ payment }) => ({ payment }));

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
