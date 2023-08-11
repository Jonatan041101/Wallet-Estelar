'use client';
import React from 'react';
import OthersWallet from './OthersWallet';
import { IconTypes } from '@/types/icons';
import useLogin from '@/hooks/useLogin';

export interface Wallet {
  icon: IconTypes;
  text: string;
  login: () => Promise<void>;
}
export default function Options() {
  const { albedo } = useLogin();

  const wallets: Wallet[] = [
    { icon: 'Albedo', text: 'Conéctate con Albedo', login: albedo },
  ];
  return (
    <section className="otherwallet">
      {wallets.map((wallet) => (
        <OthersWallet key={wallet.icon} wallet={wallet} />
      ))}
    </section>
  );
}
