import {
  FUNDING_AMOUNT,
  FUNDING_NAME,
  NO_ASSET,
  NO_PUBLIC_KEY_LENGTH,
} from '@/utils/constants';
import { parseAssetType, parseAssetTypeNativeToXML } from '@/utils/parsers';
import { getRandomProfile } from '@/utils/profiles';
import { getShortedPublicKey } from '@/utils/shortString';
import Image from 'next/image';
import React from 'react';
import { ServerApi } from 'stellar-sdk';
interface Props {
  transaction: ServerApi.PaymentOperationRecord;
  publicKey: string;
}
export default function RowTransaction({ transaction, publicKey }: Props) {
  const publicKeyDestination = getShortedPublicKey(transaction.from ?? '');
  const parseDate = new Date(transaction.created_at);
  const asset = parseAssetType(transaction.asset_type);
  const profile = getRandomProfile();
  const amount =
    transaction.from === publicKey
      ? `-${transaction.amount}`
      : `+${transaction.amount}`;
  return (
    <tr key={transaction.id} className="transaction__tr">
      <td className="transaction__td">{parseDate.toLocaleString()}</td>
      <td className="transaction__td">
        <div className="profile__img">
          <Image
            className="profile__image"
            src={profile}
            alt="Imagen de perfil random"
            width={20}
            height={20}
          />
        </div>
        {publicKeyDestination.length === NO_PUBLIC_KEY_LENGTH
          ? FUNDING_NAME
          : publicKeyDestination}
      </td>
      <td className="transaction__td--2">{`${
        transaction.amount ? amount : FUNDING_AMOUNT
      } ${asset ?? NO_ASSET}`}</td>
      <td className="transaction__td--2">{transaction.id}</td>
    </tr>
  );
}
