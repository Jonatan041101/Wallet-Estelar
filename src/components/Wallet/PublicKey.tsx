import { useBearStore } from '@/store/store';
import React from 'react';

export default function PublicKey() {
  const { publicKey } = useBearStore((state) => state.account);
  return (
    <article className="public">
      <h3 className="public__h3">Su clave pública estelar</h3>
      <p className="public__p">{publicKey}</p>
    </article>
  );
}
