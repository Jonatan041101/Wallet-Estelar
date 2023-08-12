import type { Payment } from '@/store/paymentSlice';
import type { Horizon } from 'stellar-sdk';

export interface AccountGenerate {
  secretKey: string;
  publicKey: string;
}
export type BalanceProp =
  | Horizon.BalanceLineNative
  | Horizon.BalanceLineAsset<'credit_alphanum4'>
  | Horizon.BalanceLineAsset<'credit_alphanum12'>
  | Horizon.BalanceLineLiquidityPool;
export type PaymentMethod = {
  [key in Payment]: (
    key: string,
    destination: string,
    amount: string,
  ) => Promise<Horizon.SubmitTransactionResponse>;
};
