import { toast } from 'react-toastify';
import type { ToastOptions, Id } from 'react-toastify';
import {
  MessageError,
  MessageLoad,
  MessageSucces,
  MessageSuccessWithVariable,
} from './constants';
import LoaderAndText from '@/molecules/LoaderAndText';

export const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};
export const optionsAsync: ToastOptions = {
  ...toastOptions,
  autoClose: false,
  hideProgressBar: true,
};
export const errorMsg = (message: MessageError) => {
  toast.error(`🚫 ${message}`, toastOptions);
};
export const successMsg = (
  message: MessageSucces | MessageSuccessWithVariable,
) => {
  toast.success(`✅ ${message}`, toastOptions);
};
export const succesMsgAsync = (
  id: Id,
  message: MessageSuccessWithVariable | MessageSucces,
) => {
  toast.update(id, {
    render: message,
    type: 'success',
    autoClose: 3000,
  });
};
export const succesLoaderMsg = (message: MessageLoad) =>
  toast(<LoaderAndText text={message} />, optionsAsync);
