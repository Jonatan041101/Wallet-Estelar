'use client';
import Button from '@/atoms/Button';
import React, { useState } from 'react';
import { Horizon } from 'stellar-sdk';
import Modal from '../Modal';
import useBoolean from '@/hooks/useBoolean';
import Form from '../Form';
import Input from '@/atoms/Input';
interface Props {
  balance:
    | Horizon.BalanceLineNative
    | Horizon.BalanceLineAsset<'credit_alphanum4'>
    | Horizon.BalanceLineAsset<'credit_alphanum12'>
    | Horizon.BalanceLineLiquidityPool;
}

interface Transaction {
  publicKey: string;
  amount: string;
}
interface State {
  transaction: Transaction;
}
const INITIAL_STATE: State['transaction'] = {
  amount: '',
  publicKey: '',
};
export default function Asset({ balance }: Props) {
  const [{ amount, publicKey }, setTransaction] =
    useState<State['transaction']>(INITIAL_STATE);
  const { view, handleChangeBoolean } = useBoolean();
  const asset =
    balance.asset_type === 'native' ? 'Lumens (XLM)' : balance.asset_type;
  const handleSendTransaction = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };
  const handleChangeTransaction = (
    evt: React.ChangeEvent<HTMLInputElement>,
  ) => {};
  return (
    <article className="balance__article">
      <p className="balance__p">
        {balance.balance} {asset}
      </p>
      <Button
        classNameBtn="button__complete"
        text="Enviar"
        handleClick={handleChangeBoolean}
        icon="Send"
      />
      {view && (
        <Modal closeModal={handleChangeBoolean}>
          <Form handleSubmit={handleSendTransaction}>
            <Input
              name="publicKey"
              handleChange={handleChangeTransaction}
              labelText="Pubic Key"
              placeholder=""
              type="text"
              value={publicKey}
            />
            <Input
              name="amount"
              handleChange={handleChangeTransaction}
              labelText={`Cantidad de ${asset} para enviar`}
              placeholder=""
              type="number"
              value={amount}
            />
            <Button
              handleClick={() => {}}
              classNameBtn="button__complete"
              text="Enviar"
              icon="Send"
            />
          </Form>
        </Modal>
      )}
    </article>
  );
}
