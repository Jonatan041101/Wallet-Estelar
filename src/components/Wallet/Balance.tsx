'use client';
import useLoadAccount from '@/hooks/useLoadAccount';
import React from 'react';
import Asset from './Asset';
import useAccount from '@/hooks/useAccount';
import Button from '@/atoms/Button';
import { toast } from 'react-toastify';
import { MessageLoad, MessageSucces } from '@/utils/constants';
import LoaderAndText from '@/molecules/LoaderAndText';
import { optionsAsync, succesMsgAsync } from '@/utils/toastMsg';
export default function Balance() {
  const { balanceAccount, getBalanceData } = useLoadAccount();
  useAccount();
  const handleGetBalanceData = async () => {
    try {
      const notificationId = toast(
        <LoaderAndText text={MessageLoad.WAIT_A_MOMENT} />,
        optionsAsync,
      );
      await getBalanceData();
      succesMsgAsync(notificationId, MessageSucces.LOAD_BALANCE);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="balance">
      <div className="balance__top">
        <h2 className="balance__title">Tu balance</h2>
        <Button
          text=""
          classNameBtn="button__complete"
          handleClick={handleGetBalanceData}
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
