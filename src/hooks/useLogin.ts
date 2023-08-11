import { useBearStore } from '@/store/store';
import { AccountGenerate } from '@/types/types';
import { MessageError } from '@/utils/constants';
import { errorMsg } from '@/utils/toastMsg';
import { verifyMessageSignature } from '@albedo-link/signature-verification';
import useNavigate from './useNavigate';

export default function useLogin() {
  const { getAccount, changePayment } = useBearStore((state) => ({
    getAccount: state.getAcc,
    changePayment: state.changePayment,
  }));
  const { handleNavigate } = useNavigate();
  const albedo = async () => {
    try {
      const albedo = await import('@albedo-link/intent');
      const res = await albedo.default.publicKey({});
      await albedo.default.signMessage({
        message: res.signed_message,
      });
      const isValid = verifyMessageSignature(
        res.pubkey,
        res.signed_message,
        res.signature,
      );
      if (!isValid) return errorMsg(MessageError.ERROR_PUBLIC_KEY);
      const pairKeys: AccountGenerate = {
        publicKey: res.pubkey,
        secretKey: '',
      };

      getAccount(pairKeys);

      handleNavigate('/wallet');
      changePayment('Albedo');
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };
  return {
    albedo,
  };
}
