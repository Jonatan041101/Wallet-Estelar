'use client';
import { useBearStore } from '@/store/store';
import { server } from '@/utils/server';
import { useEffect } from 'react';

export default function useBalance() {
  const { publicKey, balanceAccount, changeBalanceAccount } = useBearStore(
    ({ changeBalanceAccount, account, balanceAccount }) => ({
      publicKey: account.publicKey,
      balanceAccount,
      changeBalanceAccount: changeBalanceAccount,
    }),
  );

  const getBalance = async () => {
    try {
      const { balances } = await server.loadAccount(publicKey);
      changeBalanceAccount(balances);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBalance();
  }, [publicKey]);

  return { balanceAccount, getBalance };
}
