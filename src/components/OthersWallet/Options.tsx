import { IconsTypes } from '@/types/icons';
import React from 'react';
import OthersWallet from './OthersWallet';
export interface Wallet {
  icon: IconsTypes;
  text: string;
}
const walletsMap: Wallet[] = [{ icon: 'albedo', text: 'Conéctate con Albedo' }];
export default function Options() {
  return (
    <section className="otherwallet">
      {walletsMap.map((wallet) => (
        <OthersWallet key={wallet.icon} wallet={wallet} />
      ))}
    </section>
  );
}
