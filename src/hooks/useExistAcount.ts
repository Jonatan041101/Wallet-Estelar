import { useBearStore } from '@/store/store';
import useNavigate from './useNavigate';
import { useEffect } from 'react';

export default function useExistAcount() {
  const { publicKey } = useBearStore((state) => ({
    publicKey: state.account.publicKey,
  }));
  const { handleNavigate } = useNavigate();
  const checkedExistPublicKeyInStore = () => {
    if (publicKey.length !== 56) {
      return handleNavigate('/');
    }
  };
  useEffect(() => {
    checkedExistPublicKeyInStore();
  }, []);
}
