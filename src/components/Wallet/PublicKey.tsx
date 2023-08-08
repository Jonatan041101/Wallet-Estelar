'use client';
import Button from '@/atoms/Button';
import activeAccount from '@/services/activeAccount';
import { useBearStore } from '@/store/store';
import React from 'react';

export default function PublicKey() {
  const { publicKey } = useBearStore((state) => state.account);
  const handleActiveAccount = () => {
    activeAccount(publicKey);
  };
  return (
    <article className="public">
      <h3 className="public__h3">Su clave pública estelar</h3>
      <Button
        classNameBtn="button__complete"
        handleClick={handleActiveAccount}
        text="Activar Cuenta"
      />
      <p className="public__p">{publicKey}</p>
    </article>
  );
}
