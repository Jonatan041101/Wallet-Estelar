'use client';
import Button from '@/atoms/Button';
import useData from '@/hooks/useData';
import React from 'react';
import Asset from './Asset';

export default function Balance() {
  const account = useData();
  return (
    <div className="balance">
      <h2 className="balance__title">Tu balance</h2>
      {account ? (
        <section className="balance__section">
          {account.balances.map((balance, index) => (
            <Asset balance={balance} key={index} />
          ))}
        </section>
      ) : (
        <p>0 Lumens (XLM)</p>
      )}
    </div>
  );
}
