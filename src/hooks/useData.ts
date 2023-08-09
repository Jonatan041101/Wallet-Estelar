'use client';
import { useBearStore } from '@/store/store';
import { server } from '@/utils/server';
import { useEffect } from 'react';

export default function useData() {
  const { publicKey, balanceAccount, changeBalanceAccount } = useBearStore(
    ({ changeBalanceAccount, account, balanceAccount }) => ({
      publicKey: account.publicKey,
      balanceAccount,
      changeBalanceAccount: changeBalanceAccount,
    }),
  );

  const getAccountData = async () => {
    try {
      const accountData = await server.loadAccount(publicKey);
      changeBalanceAccount(accountData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAccountData();
  }, [publicKey]);

  return { balanceAccount, getAccountData };
}
