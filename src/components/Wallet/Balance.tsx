'use client';
import useData from '@/hooks/useData';
import React from 'react';

export default function Balance() {
  const account = useData();
  console.log({ account });

  return (
    <div>
      {account &&
        account.balances.map((balance, index) => (
          <article key={index}>
            {balance.asset_type} {balance.balance}
          </article>
        ))}
    </div>
  );
}
