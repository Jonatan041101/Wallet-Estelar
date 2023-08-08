import { IconsTypes } from '@/types/icons';
import React from 'react';
import OthersWallet from './OthersWallet';
export interface Wallet {
  icon: IconsTypes;
  text: string;
}
const wallets: Wallet[] = [{ icon: 'albedo', text: 'Conéctate con Albedo' }];
export default function Options() {
  return (
    <section className="otherwallet">
      {wallets.map((wallet) => (
        <OthersWallet key={wallet.icon} wallet={wallet} />
      ))}
    </section>
  );
}
