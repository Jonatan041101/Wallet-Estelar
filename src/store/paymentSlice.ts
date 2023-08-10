import type { ServerApi } from 'stellar-sdk';
import { StateCreator } from 'zustand';

type Payment = 'Albedo' | 'Only-Stellar';
export interface TypePayment {
  payment: Payment;
  transactions: ServerApi.PaymentOperationRecord[];
  changePayment: (payment: Payment) => void;
}

export const paymentSlice: StateCreator<TypePayment> = (set) => ({
  payment: 'Only-Stellar',
  transactions: [],
  changePayment: (payment) => {
    set((state) => ({ ...state, payment }));
  },
});
