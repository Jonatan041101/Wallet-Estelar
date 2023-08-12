import { AccountGenerate, BalanceProp } from '@/types/types';
import { StateCreator } from 'zustand';

export interface Wallet {
  account: AccountGenerate;
  balanceAccount: BalanceProp[];
  getAcc: (account: AccountGenerate) => void;
  changeBalanceAccount: (balanceAccount: BalanceProp[]) => void;
  resetAccount: () => void;
}

export const accountSlice: StateCreator<Wallet> = (set) => ({
  account: {
    publicKey: '',
    secretKey: '',
  },
  balanceAccount: [],
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
  resetAccount: () => {
    set((state) => ({
      ...state,
      account: { publicKey: '', secretKey: '' },
      balanceAccount: [],
    }));
  },
});
