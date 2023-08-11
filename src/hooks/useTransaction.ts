import { LoadError } from '@/helpers/handlerError';
import { loadTransactions } from '@/services/loadTransactions';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { errorMsg } from '@/utils/toastMsg';
import { useEffect } from 'react';

export default function useTransaction() {
  const { getTransactions, publicKey, transactions } = useBearStore(
    ({ account, transactions, getTransactions }) => ({
      getTransactions,
      publicKey: account.publicKey,
      transactions,
    }),
  );
  const handleGetTransactions = async () => {
    try {
      const transactions = await loadTransactions(publicKey);
      getTransactions(transactions);
    } catch (error) {
      if (error instanceof LoadError) {
        errorMsg(error.message as MessageError);
      }
      console.error({ error });
    }
  };
  useEffect(() => {
    handleGetTransactions();
  }, [publicKey]);
  return {
    handleGetTransactions,
    transactions,
  };
}
