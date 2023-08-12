'use client';
import useBalance from '@/hooks/useBalance';
import React from 'react';
import Asset from './Asset';
import useAccount from '@/hooks/useAccount';
import Button from '@/atoms/Button';
import { MessageLoad, MessageSucces } from '@/utils/constants';
import { succesLoaderMsg, succesMsgAsync } from '@/utils/toastMsg';
export default function Balance() {
  const { balanceAccount, getBalance } = useBalance();
  useAccount();
  const handleGetBalanceData = async () => {
    try {
      const notificationId = succesLoaderMsg(MessageLoad.WAIT_A_MOMENT);
      await getBalance();
      succesMsgAsync(notificationId, MessageSucces.LOAD_BALANCE);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="balance">
      <div className="balance__top">
        <h2 className="balance__title">Tu Saldo</h2>
        <Button
          text=""
          id="load-balance"
          classNameBtn="button__complete"
          handleClick={handleGetBalanceData}
          icon="Reload"
        />
      </div>
      {balanceAccount ? (
        <section className="balance__section">
          {balanceAccount.map((balance, index) => (
            <Asset balance={balance} key={index} />
          ))}
        </section>
      ) : (
        <p className="balance__p">0 Lumens (XLM)</p>
      )}
    </div>
  );
}
