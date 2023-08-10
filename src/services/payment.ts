import { server } from '@/utils/server';
import albedo from '@albedo-link/intent';
import {
  AccountResponse,
  Asset,
  BASE_FEE,
  Keypair,
  Networks,
  Operation,
  Transaction,
  TransactionBuilder,
  xdr,
} from 'stellar-sdk';

export const sendTransactionOnlyStellar = async (
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
    const signIn = await server.submitTransaction(transaction);
    return signIn;
  } catch (error) {
    console.log({ error });
  }
};
export const transactionBuilder = async (
  sourceAccount: AccountResponse,
  destination: string,
  amount: string,
) => {
  const transaction = new TransactionBuilder(sourceAccount, {
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
    .setTimeout(600)
    .build();
  return transaction;
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
      network: 'testnet',
    });
    const transactionR = xdr.TransactionEnvelope.fromXDR(
      albedoXDR.signed_envelope_xdr,
      'base64',
    );
    const transactionAlbedo = new Transaction(transactionR, '');
    const signIn = await server.submitTransaction(transactionAlbedo);
    console.log({ signIn });

    return signIn;
  } catch (error) {
    console.log({ error });
  }
};
