import { server } from '@/utils/server';
import {
  Asset,
  BASE_FEE,
  Keypair,
  Networks,
  Operation,
  TransactionBuilder,
} from 'stellar-sdk';

export const sendTransaction = async (
  secretKey: string,
  destination: string,
  amount: string,
) => {
  try {
    const sourceKey = Keypair.fromSecret(secretKey);
    await server.loadAccount(destination);
    const sourceAccount = await server.loadAccount(sourceKey.publicKey());
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
    transaction.sign(sourceKey);
    const signIn = await server.submitTransaction(transaction);
    return signIn;
  } catch (error) {
    console.log({ error });
  }
};
