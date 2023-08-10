'use client';
import useLoadAccount from '@/hooks/useLoadAccount';
import React from 'react';
import Asset from './Asset';
import useAccount from '@/hooks/useAccount';
import Button from '@/atoms/Button';

export default function Balance() {
  const { balanceAccount, getBalanceData } = useLoadAccount();
  useAccount();

  return (
    <div className="balance">
      <div className="balance__top">
        <h2 className="balance__title">Tu balance</h2>
        <Button
          text=""
          classNameBtn="button__complete"
          handleClick={getBalanceData}
          icon="Reload"
        />
      </div>
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
