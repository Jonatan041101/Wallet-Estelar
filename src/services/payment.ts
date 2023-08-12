import { SubmitError, TransactionError } from '@/helpers/handlerError';
import { MessageError } from '@/utils/constants';
import { server } from '@/utils/server';
import albedo from '@albedo-link/intent';
import {
  AccountResponse,
  Asset,
  BASE_FEE,
  Keypair,
  Memo,
  MemoType,
  Networks,
  Operation,
  Transaction,
  TransactionBuilder,
  xdr,
} from 'stellar-sdk';

export const transactionBuilder = async (
  sourceAccount: AccountResponse,
  destination: string,
  amount: string,
) => {
  return new TransactionBuilder(sourceAccount, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.payment({
        amount,
        asset: Asset.native(),
        destination,
      }),
    )
    .setTimeout(30)
    .build();
};

export const submitTransaction = async (
  transaction: Transaction<Memo<MemoType>, Operation[]>,
) => {
  try {
    return await server.submitTransaction(transaction);
  } catch (error) {
    if (error instanceof SubmitError) {
      throw new SubmitError(MessageError.ERROR_SUBMIT);
    }
    throw new Error(MessageError.ERROR_SUBMIT);
  }
};

export const sendTransactionWithPrivateKey = async (
  secretKey: string,
  destination: string,
  amount: string,
) => {
  try {
    const sourceKey = Keypair.fromSecret(secretKey);
    await server.loadAccount(destination);
    const sourceAccount = await server.loadAccount(sourceKey.publicKey());
    const transaction = await transactionBuilder(
      sourceAccount,
      destination,
      amount,
    );
    transaction.sign(sourceKey);
    return await submitTransaction(transaction);
  } catch (error) {
    console.error({ error });
    throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
  }
};

export const sendTransactionWithAlbedo = async (
  publicKey: string,
  destination: string,
  amount: string,
) => {
  try {
    await server.loadAccount(destination);
    const sourceAccount = await server.loadAccount(publicKey);
    const transaction = await transactionBuilder(
      sourceAccount,
      destination,
      amount,
    );
    const albedoXDR = await albedo.tx({
      xdr: transaction.toXDR(),
      network: process.env.NEXT_PUBLIC_TESTNET ?? 'testnet',
    });
    const transactionR = xdr.TransactionEnvelope.fromXDR(
      albedoXDR.signed_envelope_xdr,
      'base64',
    );
    const transactionAlbedo = new Transaction(transactionR, '');
    return await submitTransaction(transactionAlbedo);
  } catch (error) {
    console.error({ error });
    throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
  }
};
