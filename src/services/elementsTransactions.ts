import { Keypair } from 'stellar-sdk';
import { loadAccount } from './loadAccount';

export const getElementsTransactions = async (
  secretKey: string,
  publicKey: string,
) => {
  if (secretKey.length > 0) {
    const sourceAccount = Keypair.fromSecret(secretKey);
    return {
      sourceAccount: await loadAccount(sourceAccount.publicKey()),
      keypair: sourceAccount,
    };
  }
  return {
    sourceAccount: await loadAccount(publicKey),
    keypair: undefined,
  };
};
