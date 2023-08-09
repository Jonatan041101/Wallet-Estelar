import { useBearStore } from '@/store/store';
import useNavigate from './useNavigate';
import { useEffect } from 'react';

export default function useExistAcount() {
  const { publicKey, resetAccount } = useBearStore(
    ({ resetAccount, account }) => ({
      publicKey: account.publicKey,
      resetAccount,
    }),
  );
  const { handleNavigate } = useNavigate();
  const checkedExistPublicKeyInStore = () => {
    if (publicKey.length !== 56) {
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
