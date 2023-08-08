import { useBearStore } from '@/store/store';
import { server } from '@/utils/server';
import { useEffect, useState } from 'react';
import { AccountResponse } from 'stellar-sdk';

export default function useData() {
  const [account, setAccount] = useState<AccountResponse | null>(null);
  const publicKey = useBearStore((state) => state.account.publicKey);

  useEffect(() => {
    const getAccountData = async () => {
      try {
        const accountData = await server.loadAccount(publicKey);
        setAccount(accountData);
      } catch (error) {
        console.error(error);
      }
    };
    getAccountData();
  }, [publicKey]);

  return account;
}
