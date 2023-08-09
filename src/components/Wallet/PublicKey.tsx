'use client';
import Button from '@/atoms/Button';
import useData from '@/hooks/useData';
import LoaderAndText from '@/molecules/LoaderAndText';
import activeAccount from '@/services/activeAccount';
import { useBearStore } from '@/store/store';
import { optionsAsync } from '@/utils/toastMsg';
import React from 'react';
import { toast } from 'react-toastify';
export default function PublicKey() {
  const { publicKey } = useBearStore((state) => state.account);
  const { getAccountData } = useData();
  const handleActiveAccount = async () => {
    try {
      const notificationId = toast(
        <LoaderAndText text="Esperando activación de la cuenta" />,
        optionsAsync,
      );
      const transaction = await activeAccount(publicKey);
      if (transaction) {
        toast.update(notificationId, {
          render: `La cuenta a sido activada hash:${transaction.hash}`,
          type: 'success',
          autoClose: 3000,
        });
      }
      getAccountData();
    } catch (error) {
      console.error(error);
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
