import { useBearStore } from '@/store/store';
import useNavigate from './useNavigate';
import { useEffect } from 'react';
import { VALIDATIONS } from '@/utils/regExp';

export default function useAccount() {
  const { publicKey, resetAccount } = useBearStore(
    ({ resetAccount, account }) => ({
      publicKey: account.publicKey,
      resetAccount,
    }),
  );
  const { handleNavigate } = useNavigate();
  const checkedExistPublicKeyInStore = () => {
    if (!VALIDATIONS.publicKey.test(publicKey)) {
      return handleNavigate('/');
    }
  };
  useEffect(() => {
    checkedExistPublicKeyInStore();
    return () => {
      resetAccount();
    };
  }, []);
}
