import { LoadError } from '@/helpers/handlerError';
import { loadTransactions } from '@/services/loadTransactions';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { errorMsg, errorMsgAsync } from '@/utils/toastMsg';
import { useEffect } from 'react';
import { Id } from 'react-toastify';

export default function useTransaction() {
  const { getTransactions, publicKey, transactions } = useBearStore(
    ({ account, transactions, getTransactions }) => ({
      getTransactions,
      publicKey: account.publicKey,
      transactions,
    }),
  );
  const handleGetTransactions = async (firstLoad: boolean, id?: Id) => {
    try {
      const transactions = await loadTransactions(publicKey);
      getTransactions(transactions);
    } catch (error) {
      if (error instanceof LoadError && !firstLoad) {
        if (id) {
          errorMsgAsync(id, MessageError.NOT_TRANSACTIONS);
        } else {
          errorMsg(error.message as MessageError);
        }
        throw new LoadError(MessageError.ERROR);
      }
      console.error({ error });
      throw new Error(MessageError.ERROR);
    }
  };
  useEffect(() => {
    handleGetTransactions(true);
  }, [publicKey]);
  return {
    handleGetTransactions,
    transactions,
  };
}
