import { create } from 'zustand';
import { Wallet, accountSlice } from './accountSlice';

export const useBearStore = create<Wallet>((...set) => ({
  ...accountSlice(...set),
}));
