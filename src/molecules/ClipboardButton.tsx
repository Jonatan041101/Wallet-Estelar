'use client';

import Button from '@/atoms/Button';
import { useState } from 'react';
import CheckComponent from '../atoms/CheckComponent';
import Icons from '../atoms/icons/icons';
import { errorMsg, successMsg } from '@/utils/toastMsg';
import { MessageError, MessageSucces } from '@/utils/constants';
interface Props {
  text: string;
  handleClose: () => void;
}
function ClipboardButton({ text, handleClose }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      successMsg(MessageSucces.COPIED_TO_CLIPBOARD);
    } catch (err) {
      console.error('Error al copiar texto:', err);
      errorMsg(MessageError.ERROR_COPYING);
    }
  };
  const handleChangeCopy = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setIsCopied(checked);
  };
  const handleCloseModal = () => {
    if (!isCopied) {
      return errorMsg(MessageError.SAVE_KEYS);
    }
    handleClose();
  };
  return (
    <div className="copy">
      <div className="copy__clip">
        <button onClick={handleCopy} className="copy__button">
          Copiar Keys{' '}
          <i className="copy__i">
            <Icons icon="Copy" />
          </i>
        </button>
      </div>
      <CheckComponent
        text="Guardé mi clave secreta en un lugar seguro"
        isCopied={isCopied}
        handleChangeCopy={handleChangeCopy}
      />
      <div className="copy__close">
        <Button
          classNameBtn="button__complete"
          handleClick={handleCloseModal}
          text="Cerrar"
        />
      </div>
    </div>
  );
}
export default ClipboardButton;
