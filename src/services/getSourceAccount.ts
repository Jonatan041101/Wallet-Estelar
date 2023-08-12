import { Keypair } from 'stellar-sdk';
import { loadAccount } from './loadAccount';

export const getSourceAccount = async (
  secretKey: string,
  publicKey: string,
) => {
  if (secretKey.length > 0) {
    const sourceAccount = Keypair.fromSecret(secretKey);
    return await loadAccount(sourceAccount.publicKey());
  }
  return await loadAccount(publicKey);
};
