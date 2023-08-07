'use client';
import React from 'react';
import { Wallet } from './Options';
import Button from '@/atoms/Button';
interface Props {
  wallet: Wallet;
}
export default function OthersWallet({ wallet }: Props) {
  return (
    <article className="otherwallet__div">
      <Button
        classNameBtn="button__wallet"
        handleClick={() => {}}
        text={wallet.text}
        icon={wallet.icon}
      />
    </article>
  );
}
