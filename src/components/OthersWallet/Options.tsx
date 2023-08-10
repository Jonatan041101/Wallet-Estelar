import React from 'react';
import OthersWallet from './OthersWallet';
import { IconTypes } from '@/types/icons';
export interface Wallet {
  icon: IconTypes;
  text: string;
}
const wallets: Wallet[] = [{ icon: 'Albedo', text: 'Conéctate con Albedo' }];
export default function Options() {
  return (
    <section className="otherwallet">
      {wallets.map((wallet) => (
        <OthersWallet key={wallet.icon} wallet={wallet} />
      ))}
    </section>
  );
}
