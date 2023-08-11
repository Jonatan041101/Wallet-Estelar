'use client';
import Button from '@/atoms/Button';
import React, { useState } from 'react';
import Modal from '../Modal';
import useBoolean from '@/hooks/useBoolean';
import Form from '../Form';
import Input from '@/atoms/Input';
import {
  errorMsg,
  succesLoaderMsg,
  succesMsgAsync,
  successMsg,
} from '@/utils/toastMsg';
import { MessageError, MessageLoad, MessageSucces } from '@/utils/constants';
import {
  parseAmountToDecimal,
  parseAssetTypeNativeToXML,
} from '@/utils/parsers';
import { useBearStore } from '@/store/store';
import useLoadAccount from '@/hooks/useLoadAccount';
import useTransaction from '@/hooks/useTransaction';
import { TransactionError, ValidationError } from '@/helpers/handlerError';
import { isNumberValidate, isPublicKey } from '@/utils/validations';
import { BalanceProp } from '@/types/types';
import usePayment from '@/hooks/usePayment';

interface Props {
  balance: BalanceProp;
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
  const { handleTransaction } = usePayment();
  const { getBalance } = useLoadAccount();
  const { handleGetTransactions } = useTransaction();
  const { secretKey, publicKeySend } = useBearStore(({ account }) => ({
    secretKey: account.secretKey,
    publicKeySend: account.publicKey,
  }));
  const asset = parseAssetTypeNativeToXML(balance.asset_type);

  const handleSendTransaction = async (
    evt: React.FormEvent<HTMLFormElement>,
  ) => {
    evt.preventDefault();
    try {
      isNumberValidate(amount);
      isPublicKey(publicKey);
      const parserAmount = parseAmountToDecimal(amount);
      const notificationId = succesLoaderMsg(MessageLoad.TRANSACTION);
      handleChangeBoolean();
      setTransaction(INITIAL_STATE);
      await handleTransaction(
        secretKey.length === 0 ? publicKeySend : secretKey,
        publicKey,
        parserAmount,
      );
      succesMsgAsync(
        notificationId,
        `Se ha enviado ${`${parserAmount} ${asset}`} a ${publicKey}`,
      );
      getBalance();
      await handleGetTransactions();
      successMsg(MessageSucces.HISTORY_UPDATE);
    } catch (error) {
      if (error instanceof ValidationError) {
        errorMsg(error.message as MessageError);
      } else if (error instanceof TransactionError) {
        errorMsg(error.message as MessageError);
      }
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
        <Modal
          closeModal={handleChangeBoolean}
          title={`Enviar transacción de ${asset}`}
        >
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
            <div className="balance__button">
              <Button
                id="send-transaction"
                handleClick={() => {}}
                classNameBtn="button__complete"
                text="Enviar"
                icon="Send"
              />
            </div>
          </Form>
        </Modal>
      )}
    </article>
  );
}
