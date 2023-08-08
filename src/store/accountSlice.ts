import { AccountGenerate } from '@/types/types';
import { StateCreator } from 'zustand';

interface Wallet {
  account: AccountGenerate;
  getAcc: (account: AccountGenerate) => void;
}

export const accountSlice: StateCreator<Wallet> = (set) => ({
  account: {
    publicKey: '',
    secretKey: '',
  },
  getAcc: (account) => {
    set((state) => ({
      ...state,
      account: {
        publicKey: account.publicKey,
        secretKey: account.secretKey,
      },
    }));
  },
});
