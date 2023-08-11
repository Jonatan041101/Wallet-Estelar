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
