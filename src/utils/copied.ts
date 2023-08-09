import { MessageError, MessageSucces } from './constants';
import { errorMsg, successMsg } from './toastMsg';

export const handleCopy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    successMsg(MessageSucces.COPIED_TO_CLIPBOARD);
  } catch (err) {
    console.error('Error al copiar texto:', err);
    errorMsg(MessageError.ERROR_COPYING);
  }
};
