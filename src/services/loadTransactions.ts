import { LoadError } from '@/helpers/handlerError';
import { MessageError } from '@/utils/constants';
import { server } from '@/utils/server';

export const loadTransactions = async (publicKey: string) => {
  try {
    const payments = server.payments();
    const transactions = payments.forAccount(publicKey);
    const allTransactions = await transactions.call();
    return allTransactions.records;
  } catch (error) {
    throw new LoadError(MessageError.LOAD_ERROR);
  }
};
