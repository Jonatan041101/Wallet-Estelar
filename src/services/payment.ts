import { SubmitError, TransactionError } from '@/helpers/handlerError';
import { TypeTransaction } from '@/types/types';
import { MessageError } from '@/utils/constants';
import { server } from '@/utils/server';
import {
  AccountResponse,
  Asset,
  BASE_FEE,
  Networks,
  Operation,
  TransactionBuilder,
} from 'stellar-sdk';
export const transactionBuilder = (
  sourceAccount: AccountResponse,
  destination: string,
  amount: string,
) =>
  new TransactionBuilder(sourceAccount, {
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

export const submitTransaction = async (transaction: TypeTransaction) => {
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
  account: AccountResponse,
  destination: string,
  amount: string,
) => {
  try {
    return transactionBuilder(account, destination, amount);
  } catch (error) {
    console.error({ error });
    throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
  }
};

export const sendTransactionWithAlbedo = async (
  account: AccountResponse,
  destination: string,
  amount: string,
) => {
  try {
    return transactionBuilder(account, destination, amount);
  } catch (error) {
    console.error({ error });
    throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
  }
};
