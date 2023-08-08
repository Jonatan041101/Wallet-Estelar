import Balance from '@/components/Wallet/Balance';
import PublicKey from '@/components/Wallet/PublicKey';
import VerifyPublicKey from '@/components/Wallet/VerifyPublicKey';
import React from 'react';

export default function PageWallet() {
  return (
    <div className="wallet">
      <VerifyPublicKey />
      <Balance />
      <PublicKey />
    </div>
  );
}
