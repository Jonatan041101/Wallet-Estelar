'use client';
import useData from '@/hooks/useData';
import React from 'react';

export default function Balance() {
  const account = useData();
  return (
    <div className="balance">
      <h2 className="balance__title">Tu balance</h2>
      {account ? (
        <section className="balance__section">
          {account.balances.map((balance, index) => (
            <article className="balance__article" key={index}>
              <p className="balance__p">
                {balance.balance}{' '}
                {balance.asset_type === 'native'
                  ? 'Lumens (XLM)'
                  : balance.asset_type}
              </p>
            </article>
          ))}
        </section>
      ) : (
        <p>No tienes fondos</p>
      )}
    </div>
  );
}
