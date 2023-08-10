import Balance from '@/components/Wallet/Balance';
import PublicKey from '@/components/Wallet/PublicKey';
import React from 'react';

export default function PageWallet() {
  return (
    <div className="wallet">
      <div className="wallet__container">
        <Balance />
        <PublicKey />
      </div>
    </div>
  );
}
