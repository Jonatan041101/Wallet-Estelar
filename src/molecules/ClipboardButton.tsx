'use client';

import Button from '@/atoms/Button';
import { useState } from 'react';
import CheckComponent from '../atoms/CheckComponent';
import Icons from '../atoms/icons';

const ClipboardButton = ({ text }: { text: string }) => {
  const [copy, setCopy] = useState<boolean>(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      alert('Texto copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar texto:', err);
    }
  }
  function handleChangeCopy(evt: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = evt.target;
    setCopy(checked);
  }
  function handleCloseModal() {}
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
        C
      </div>
    </div>
  );
};
export default ClipboardButton;
