import { AccountGenerate } from '@/types/types';
import { Keypair } from 'stellar-sdk';

const createAccount = (): AccountGenerate => {
  const randomPair = Keypair.random();
  const secretKey: string = randomPair.secret();
  const publicKey: string = randomPair.publicKey();
  return {
    secretKey,
    publicKey,
  };
};

export default createAccount;
