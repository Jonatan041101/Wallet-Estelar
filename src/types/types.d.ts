import type { Payment } from '@/store/paymentSlice';
import type {
  AccountResponse,
  Horizon,
  Keypair,
  Memo,
  MemoType,
  Operation,
  Transaction,
} from 'stellar-sdk';

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
    account: AccountResponse,
    destination: string,
    amount: string,
  ) => Promise<TypeTransaction>;
};
export type SingInTransaction = {
  [key in Payment]: (
    transaction: TypeTransaction,
    keypair?: Keypair,
  ) => Promise<TypeTransaction>;
};
export type TypeTransaction = Transaction<Memo<MemoType>, Operation[]>;
