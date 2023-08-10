'use client';
import React from 'react';
import OthersWallet from './OthersWallet';
import { IconTypes } from '@/types/icons';
import albedo from '@albedo-link/intent';
import { useBearStore } from '@/store/store';
import useNavigate from '@/hooks/useNavigate';
import type { AccountGenerate } from '@/types/types';
import { verifyMessageSignature } from '@albedo-link/signature-verification';
import { errorMsg } from '@/utils/toastMsg';
import { MessageError } from '@/utils/constants';

export interface Wallet {
  icon: IconTypes;
  text: string;
  login: () => Promise<void>;
}
export default function Options() {
  const { getAccount } = useBearStore(({ getAcc }) => ({
    getAccount: getAcc,
  }));
  const { handleNavigate } = useNavigate();
  const loginAlbedo = async () => {
    try {
      const res = await albedo.publicKey({});
      await albedo.signMessage({
        message: res.signed_message,
      });
      const isValid = verifyMessageSignature(
        res.pubkey,
        res.signed_message,
        res.signature,
      );
      if (!isValid) return errorMsg(MessageError.ERROR_PUBLIC_KEY);
      const pairKeys: AccountGenerate = {
        publicKey: res.pubkey,
        secretKey: '',
      };

      getAccount(pairKeys);

      handleNavigate('/wallet');
    } catch (error) {
      console.log(error);
    }
  };
  const wallets: Wallet[] = [
    { icon: 'Albedo', text: 'Conéctate con Albedo', login: loginAlbedo },
  ];
  return (
    <section className="otherwallet">
      {wallets.map((wallet) => (
        <OthersWallet key={wallet.icon} wallet={wallet} />
      ))}
    </section>
  );
}
