'use client';
import Button from '@/atoms/Button';
import useNavigate from '@/hooks/useNavigate';
import { useBearStore } from '@/store/store';
import { handleCopy } from '@/utils/copied';
import { getRandomProfile } from '@/utils/profiles';
import { getShortedPublicKey } from '@/utils/shortString';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
  const { handleNavigate } = useNavigate();
  const { publicKey, resetAccount } = useBearStore(
    ({ account, resetAccount }) => ({
      publicKey: account.publicKey,
      resetAccount,
    }),
  );
  const profile = getRandomProfile();
  const handleCopied = () => {
    if (publicKey.length > 0) {
      handleCopy(publicKey);
    }
  };
  const handleLogout = () => {
    handleNavigate('/');
    resetAccount();
  };
  const shortPublicKey = getShortedPublicKey(publicKey);
  return (
    publicKey.length > 0 && (
      <div className="profile">
        <article className="profile__article">
          <div className="profile__img">
            <Image
              className="profile__image"
              src={profile}
              alt="Imagen de perfil random"
              width={20}
              height={20}
            />
          </div>
          <Button
            classNameBtn="button__transparent"
            id="public-key"
            handleClick={handleCopied}
            text={shortPublicKey}
            icon="Copy"
          />
        </article>
        <div className="profile__logout">
          <Button
            classNameBtn="button__transparent"
            handleClick={handleLogout}
            text="Cerrar sesión"
          />
        </div>
      </div>
    )
  );
}
