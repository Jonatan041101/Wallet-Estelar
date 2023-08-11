import { loadTransactions } from '@/services/loadTransactions';
import { useBearStore } from '@/store/store';
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
      if (transactions) {
        getTransactions(transactions);
      }
    } catch (error) {
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
