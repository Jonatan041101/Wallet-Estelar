import { toast } from 'react-toastify';
import type { ToastOptions } from 'react-toastify';
import {
  MessageError,
  MessageSucces,
  MessageSuccessWithVariable,
} from './constants';

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
