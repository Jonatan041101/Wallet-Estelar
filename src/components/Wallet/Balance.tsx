'use client';
import useData from '@/hooks/useData';
import React from 'react';

export default function Balance() {
  const account = useData();
  return (
    <div>
      <h2>Tu balance</h2>
      {account ? (
        account.balances.map((balance, index) => (
          <article key={index}>
            <p>
              {balance.balance}{' '}
              {balance.asset_type === 'native'
                ? 'Lumens (XLM)'
                : balance.asset_type}
            </p>
          </article>
        ))
      ) : (
        <p>No tienes fondos</p>
      )}
    </div>
  );
}
