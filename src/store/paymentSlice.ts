import { StateCreator } from 'zustand';

type Payment = 'Albedo' | 'Only-Stellar';
export interface TypePayment {
  payment: Payment;
  changePayment: (payment: Payment) => void;
}

export const paymentSlice: StateCreator<TypePayment> = (set) => ({
  payment: 'Only-Stellar',
  changePayment: (payment) => {
    set((state) => ({ ...state, payment }));
  },
});
