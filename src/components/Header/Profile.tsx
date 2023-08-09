'use client';
import Button from '@/atoms/Button';
import Icons from '@/atoms/icons/icons';
import { useBearStore } from '@/store/store';
import { getProfileRandom } from '@/utils/profiles';
import Image from 'next/image';
import React from 'react';

export default function Profile() {
  const { publicKey } = useBearStore(({ account }) => ({
    publicKey: account.publicKey,
  }));
  const profile = getProfileRandom();
  return (
    <>
      {publicKey.length > 0 && (
        <div>
          <article className="">
            <Image
              src={profile}
              alt="Imagen de perfil random"
              width={50}
              height={50}
            />
            <button className="">
              {`${publicKey.slice(0, 5)}...${publicKey.slice(
                publicKey.length - 5,
                publicKey.length,
              )}`}
              <i className="">
                <Icons icon="Copy" />
              </i>
            </button>
          </article>
          <button>Cerrar sesión</button>
        </div>
      )}
    </>
  );
}
