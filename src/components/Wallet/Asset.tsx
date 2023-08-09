'use client';
import Button from '@/atoms/Button';
import React, { useState } from 'react';
import { Horizon } from 'stellar-sdk';
import Modal from '../Modal';
import useBoolean from '@/hooks/useBoolean';
import Form from '../Form';
import Input from '@/atoms/Input';
import { errorMsg, successMsg } from '@/utils/toastMsg';
import { MessageError, MessageSucces } from '@/utils/constants';
import { parserAmountToDecimal } from '@/utils/parserAmount';
import { VALIDATIONS } from '@/utils/validations';
import { useBearStore } from '@/store/store';
import { sendTransaction } from '@/services/payment';
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
  const { secretKey } = useBearStore(({ account }) => ({
    secretKey: account.secretKey,
  }));
  const asset =
    balance.asset_type === 'native' ? 'Lumens (XLM)' : balance.asset_type;
  const handleSendTransaction = async (
    evt: React.FormEvent<HTMLFormElement>,
  ) => {
    evt.preventDefault();
    if (isNaN(Number(amount)) || amount.length === 0) {
      return errorMsg(MessageError.INVALID_NUMBER);
    }
    if (!VALIDATIONS.publicKey.test(publicKey)) {
      return errorMsg(MessageError.ERROR_PUBLIC_KEY);
    }
    const parserAmount = parserAmountToDecimal(amount);
    try {
      await sendTransaction(secretKey, publicKey, parserAmount);
      successMsg(MessageSucces.COPIED_TO_CLIPBOARD);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeTransaction = (
    evt: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = evt.target;
    if (name === 'publicKey' || name === 'amount') {
      setTransaction((state) => ({ ...state, [name]: value }));
    }
  };
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
              placeholder="Comienza con G ejemplo: GBS7...H6XG"
              type="text"
              value={publicKey}
            />
            <Input
              name="amount"
              handleChange={handleChangeTransaction}
              labelText={`Cantidad de ${asset} para enviar`}
              placeholder={`Ejemplo 1.0000000 un ${asset}`}
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
