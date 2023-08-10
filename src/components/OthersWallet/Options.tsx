'use client';
import React from 'react';
import OthersWallet from './OthersWallet';
import { IconTypes } from '@/types/icons';
export interface Wallet {
  icon: IconTypes;
  text: string;
  login: () => Promise<void>;
}
import albedo from '@albedo-link/intent';
import { useBearStore } from '@/store/store';
import useNavigate from '@/hooks/useNavigate';
import type { AccountGenerate } from '@/types/types';

export default function Options() {
  const { getAccount } = useBearStore(({ getAcc }) => ({
    getAccount: getAcc,
  }));
  const { handleNavigate } = useNavigate();
  const loginAlbedo = async () => {
    try {
      const res = await albedo.publicKey({});
      const pairKeys: AccountGenerate = {
        publicKey: res.pubkey,
        secretKey: '',
      };
      getAccount(pairKeys);
      handleNavigate('/wallet');
    } catch (error) {
      console.log(error);
    }
  };
  const wallets: Wallet[] = [
    { icon: 'Albedo', text: 'Conéctate con Albedo', login: loginAlbedo },
  ];
  return (
    <section className="otherwallet">
      {wallets.map((wallet) => (
        <OthersWallet key={wallet.icon} wallet={wallet} />
      ))}
    </section>
  );
}
