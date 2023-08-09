'use client';
import Button from '@/atoms/Button';
import { useBearStore } from '@/store/store';
import { handleCopy } from '@/utils/copied';
import { getProfileRandom } from '@/utils/profiles';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
  const { publicKey } = useBearStore(({ account }) => ({
    publicKey: account.publicKey,
  }));
  const profile = getProfileRandom();
  const handleCopied = () => {
    if (publicKey.length > 0) {
      handleCopy(publicKey);
    }
  };
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
            handleClick={handleCopied}
            text={`${publicKey.slice(0, 5)}...${publicKey.slice(
              publicKey.length - 5,
              publicKey.length,
            )}`}
            icon="Copy"
          />
        </article>
        <div className="profile__logout">
          <Button
            classNameBtn="button__transparent"
            handleClick={() => {}}
            text="Cerrar sesión"
          />
        </div>
      </div>
    )
  );
}
