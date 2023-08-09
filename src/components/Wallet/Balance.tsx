'use client';
import useData from '@/hooks/useData';
import React from 'react';
import Asset from './Asset';

export default function Balance() {
  const { balanceAccount } = useData();
  return (
    <div className="balance">
      <h2 className="balance__title">Tu balance</h2>
      {balanceAccount ? (
        <section className="balance__section">
          {balanceAccount.balances.map((balance, index) => (
            <Asset balance={balance} key={index} />
          ))}
        </section>
      ) : (
        <p className="balance__p">0 Lumens (XLM)</p>
      )}
    </div>
  );
}
