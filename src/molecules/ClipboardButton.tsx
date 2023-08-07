'use client';

import Button from '@/atoms/Button';
import { useState } from 'react';
import CheckComponent from '../atoms/CheckComponent';
import Icons from '../atoms/icons';
import { errorMsg, successMsg } from '@/utils/toastMsg';
interface Props {
  text: string;
  handleClose: () => void;
}
function ClipboardButton({ text, handleClose }: Props) {
  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      successMsg('Copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar texto:', err);
    }
  };
  const handleChangeCopy = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setCopy(checked);
  };
  const handleCloseModal = () => {
    if (!copy) {
      return errorMsg('Guarde sus llaves');
    }
    handleClose();
  };
  return (
    <div className="copy">
      <div className="copy__clip">
        <button onClick={handleCopy} className="copy__button">
          Copiar Keys{' '}
          <i className="copy__i">
            <Icons icon="copy" />
          </i>
        </button>
      </div>
      <CheckComponent
        text="Guardé mi clave secreta en un lugar seguro"
        copy={copy}
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
