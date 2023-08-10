'use client';
import Button from '@/atoms/Button';
import React, { useState } from 'react';
import { Horizon } from 'stellar-sdk';
import Modal from '../Modal';
import useBoolean from '@/hooks/useBoolean';
import Form from '../Form';
import Input from '@/atoms/Input';
import { errorMsg, optionsAsync, succesMsgAsync } from '@/utils/toastMsg';
import { MessageError, MessageLoad } from '@/utils/constants';
import {
  parseAmountToDecimal,
  parseAssetTypeNativeToXML,
} from '@/utils/parsers';
import { VALIDATIONS } from '@/utils/validations';
import { useBearStore } from '@/store/store';
import {
  sendTransactionOnlyStellar,
  sendTransactionWithAlbedo,
} from '@/services/payment';
import { toast } from 'react-toastify';
import LoaderAndText from '@/molecules/LoaderAndText';
import useLoadAccount from '@/hooks/useLoadAccount';
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
  const { getBalanceData } = useLoadAccount();
  const { secretKey, payment, publicKeySend } = useBearStore(
    ({ account, payment }) => ({
      secretKey: account.secretKey,
      publicKeySend: account.publicKey,
      payment,
    }),
  );
  const asset = parseAssetTypeNativeToXML(balance.asset_type);

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
    const parserAmount = parseAmountToDecimal(amount);
    try {
      const notificationId = toast(
        <LoaderAndText text={MessageLoad.TRANSACTION} />,
        optionsAsync,
      );
      handleChangeBoolean();
      setTransaction(INITIAL_STATE);
      let signature = false;
      if (payment === 'Albedo') {
        const signatureTransaction = await sendTransactionWithAlbedo(
          publicKeySend,
          publicKey,
          amount,
        );
        if (signatureTransaction && signatureTransaction.successful) {
          signature = true;
        }
      } else {
        const signatureTransaction = await sendTransactionOnlyStellar(
          secretKey,
          publicKey,
          parserAmount,
        );
        if (signatureTransaction && signatureTransaction.successful) {
          signature = true;
        }
      }
      if (!signature) {
        errorMsg(MessageError.ERROR_IN_TRANSACTION);
      }
      const countAmount = `${parserAmount} ${asset}`;
      succesMsgAsync(
        notificationId,
        `Se ha enviado ${countAmount} a ${publicKey}`,
      );
      getBalanceData();
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(MessageError.ERROR_IN_TRANSACTION);
      }
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
