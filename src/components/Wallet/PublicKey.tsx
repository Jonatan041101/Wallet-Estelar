'use client';
import Button from '@/atoms/Button';
import useLoadAccount from '@/hooks/useLoadAccount';
import LoaderAndText from '@/molecules/LoaderAndText';
import activeAccount from '@/services/activeAccount';
import { useBearStore } from '@/store/store';
import { MessageError } from '@/utils/constants';
import { errorMsg, optionsAsync, succesMsgAsync } from '@/utils/toastMsg';
import React from 'react';
import { toast } from 'react-toastify';
export default function PublicKey() {
  const { publicKey } = useBearStore((state) => state.account);
  const { getData } = useLoadAccount();
  const handleActiveAccount = async () => {
    try {
      const notificationId = toast(
        <LoaderAndText text="Esperando activación de la cuenta" />,
        optionsAsync,
      );
      const transaction = await activeAccount(publicKey);
      if (transaction) {
        succesMsgAsync(
          notificationId,
          `La cuenta ha sido activada hash:${transaction.hash}`,
        );
      }
      getData();
    } catch (error) {
      errorMsg(MessageError.ERROR_ACTIVATE_ACCOUNT);
    }
  };
  return (
    <article className="public">
      <div className="public__contain">
        <h3 className="public__h3">Su clave pública estelar</h3>
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
