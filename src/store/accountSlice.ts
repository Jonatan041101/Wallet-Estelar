import { AccountGenerate } from '@/types/types';
import { AccountResponse } from 'stellar-sdk';
import { StateCreator } from 'zustand';

interface Wallet {
  account: AccountGenerate;
  balanceAccount: AccountResponse | null;
  getAcc: (account: AccountGenerate) => void;
  changeBalanceAccount: (balanceAccount: AccountResponse) => void;
}

export const accountSlice: StateCreator<Wallet> = (set) => ({
  account: {
    publicKey: '',
    secretKey: '',
  },
  balanceAccount: null,
  getAcc: (account) => {
    set((state) => ({
      ...state,
      account: {
        publicKey: account.publicKey,
        secretKey: account.secretKey,
      },
    }));
  },
  changeBalanceAccount: (balanceAccount) => {
    set((state) => ({ ...state, balanceAccount }));
  },
});
