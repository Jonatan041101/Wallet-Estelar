import { useBearStore } from '@/store/store';
import { TypeTransaction } from '@/types/types';
import { signInTransaction } from '@/utils/transactionsMethod';
import { Keypair } from 'stellar-sdk';

export default function useSignIn() {
  const { payment } = useBearStore(({ payment }) => ({ payment }));
  const handleSignInTransaction = async (
    transaction: TypeTransaction,
    keypair?: Keypair,
  ) => {
    try {
      return await signInTransaction[payment](transaction, keypair);
    } catch (error) {
      throw new Error('');
    }
  };
  return {
    handleSignInTransaction,
  };
}
