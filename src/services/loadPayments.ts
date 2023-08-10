import { server } from '@/utils/server';

export const loadPaymets = async (publicKey: string) => {
  try {
    const transactions = await server.payments().forAccount(publicKey).call();
    return transactions.records;
  } catch (error) {
    console.log(error);
  }
};
