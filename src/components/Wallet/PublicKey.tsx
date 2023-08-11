'use client';
import Button from '@/atoms/Button';
import useLoadAccount from '@/hooks/useLoadAccount';
import activeAccount from '@/services/activeAccount';
import { useBearStore } from '@/store/store';
import { MessageError, MessageLoad } from '@/utils/constants';
import { errorMsg, succesLoaderMsg, succesMsgAsync } from '@/utils/toastMsg';
import React from 'react';
export default function PublicKey() {
  const { publicKey } = useBearStore((state) => state.account);
  const { getBalance } = useLoadAccount();
  const handleActiveAccount = async () => {
    try {
      const notificationId = succesLoaderMsg(MessageLoad.ACTIVATE_ACOUNT);

      const transaction = await activeAccount(publicKey);
      if (transaction) {
        succesMsgAsync(
          notificationId,
          `La cuenta ha sido activada hash:${transaction.hash}`,
        );
      }
      getBalance();
    } catch (error) {
      errorMsg(MessageError.ERROR_ACTIVATE_ACCOUNT);
    }
  };
  return (
    <article className="public">
      <div className="public__contain">
        <h3 className="public__h3">Su clave pública Stellar</h3>
        <Button
          classNameBtn="button__complete"
          handleClick={handleActiveAccount}
          text="Activar Cuenta"
        />
      </div>
      <p className="public__p">{publicKey}</p>
    </article>
  );
}
