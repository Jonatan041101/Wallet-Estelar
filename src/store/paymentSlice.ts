import type { ServerApi } from 'stellar-sdk';
import { StateCreator } from 'zustand';

export type Payment = 'Albedo' | 'Only-Stellar';
export interface TypePayment {
  payment: Payment;
  transactions: ServerApi.PaymentOperationRecord[];
  getTransactions: (transactions: ServerApi.PaymentOperationRecord[]) => void;
  changePayment: (payment: Payment) => void;
}

export const paymentSlice: StateCreator<TypePayment> = (set) => ({
  payment: 'Only-Stellar',
  transactions: [],
  getTransactions: (transactions) => {
    set((state) => ({ ...state, transactions }));
  },
  changePayment: (payment) => {
    set((state) => ({ ...state, payment }));
  },
});
