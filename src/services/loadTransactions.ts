import { server } from '@/utils/server';

export const loadTransactions = async (publicKey: string) => {
  try {
    const transactions = await server.payments().forAccount(publicKey).call();
    return transactions.records;
  } catch (error) {
    console.error(error);
  }
};
