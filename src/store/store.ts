import { create } from 'zustand';
import { Wallet, accountSlice } from './accountSlice';
import { TypePayment, paymentSlice } from './paymentSlice';
export const useBearStore = create<Wallet & TypePayment>((...set) => ({
  ...accountSlice(...set),
  ...paymentSlice(...set),
}));
