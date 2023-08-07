import { AccountGenerate } from '@/types/types';
import * as StellarSdk from 'stellar-sdk';

const createAccount = (): AccountGenerate => {
  const randomPair = StellarSdk.Keypair.random();
  const secretKey: string = randomPair.secret();
  const publicKey: string = randomPair.publicKey();
  return {
    secretKey,
    publicKey,
  };
};

export default createAccount;
