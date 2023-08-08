import { AccountGenerate } from '@/types/types';
import { create } from 'zustand';
import { accountSlice } from './accountSlice';

interface Wallet {
  account: AccountGenerate;
  getAcc: (account: AccountGenerate) => void;
}

export const useBearStore = create<Wallet>((...set) => ({
  ...accountSlice(...set),
}));
