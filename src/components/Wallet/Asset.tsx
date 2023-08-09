import Button from '@/atoms/Button';
import React from 'react';
import { Horizon } from 'stellar-sdk';
interface Props {
  balance:
    | Horizon.BalanceLineNative
    | Horizon.BalanceLineAsset<'credit_alphanum4'>
    | Horizon.BalanceLineAsset<'credit_alphanum12'>
    | Horizon.BalanceLineLiquidityPool;
}
export default function Asset({ balance }: Props) {
  return (
    <article className="balance__article">
      <p className="balance__p">
        {balance.balance}{' '}
        {balance.asset_type === 'native' ? 'Lumens (XLM)' : balance.asset_type}
      </p>
      <Button
        classNameBtn="button__complete"
        text="Enviar"
        handleClick={() => {}}
        icon="Send"
      />
    </article>
  );
}
