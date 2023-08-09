'use client';
import Button from '@/atoms/Button';
import useData from '@/hooks/useData';
import activeAccount from '@/services/activeAccount';
import { useBearStore } from '@/store/store';
import { successMsg } from '@/utils/toastMsg';
import React from 'react';

export default function PublicKey() {
  const { publicKey } = useBearStore((state) => state.account);
  const { getAccountData } = useData();
  const handleActiveAccount = async () => {
    try {
      const transaction = await activeAccount(publicKey);
      if (transaction) {
        successMsg(`La cuenta a sido activada hash:${transaction.hash}`);
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
