import { toast } from 'react-toastify';
import {
  MessageError,
  MessageSucces,
  MessageSuccessWithVariable,
} from './constants';

export const errorMsg = (message: MessageError) => {
  toast.error(`🚫 ${message}`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
export const successMsg = (
  message: MessageSucces | MessageSuccessWithVariable,
) => {
  toast.success(`✅ ${message}`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
