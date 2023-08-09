'use client';

import Button from '@/atoms/Button';
import { useState } from 'react';
import CheckComponent from '../atoms/CheckComponent';
import Icons from '../atoms/icons/icons';
import { errorMsg } from '@/utils/toastMsg';
import { MessageError } from '@/utils/constants';
import { handleCopy } from '@/utils/copied';
interface Props {
  text: string;
  handleClose: () => void;
}
function ClipboardButton({ text, handleClose }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

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
        <button onClick={() => handleCopy(text)} className="copy__button">
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
