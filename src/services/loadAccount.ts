import { server } from '@/utils/server';
import { AccountResponse } from 'stellar-sdk';

export const loadAccount = async (key: string): Promise<AccountResponse> => {
  try {
    return await server.loadAccount(key);
  } catch (error) {
    throw new Error('');
  }
};
