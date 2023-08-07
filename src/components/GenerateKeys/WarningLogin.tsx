import React from 'react';
import Modal from '../Modal';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/atoms/Button';
import CheckComponent from '@/atoms/CheckComponent';
import WarningTitle from '@/atoms/WarningTitle';
import List from '@/atoms/List';
import Warning from '@/molecules/Warning';

interface Props {
  closeModal: () => void;
  handleNext: () => void;
}
const list: string[] = [
  `Copiar y pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas que pueden provocar la pérdida de fondos.`,
  `Si este sitio web se vio comprometido o si visita una réplica de phishing de este sitio, su clave secreta puede ser robada si utiliza este método.`,
  `Es más seguro usar métodos de conexión que no compartan su clave secreta con sitios web, como carteras de hardware o extensiones de navegador.`,
  `Nota: Es posible que la conexión ingresando una clave secreta quede obsoleta en una versión futura de Account Viewer.`,
];
export default function WarningLogin({ closeModal, handleNext }: Props) {
  const { handleChangeBoolean, view } = useBoolean();
  function handleChangeCopy() {
    handleChangeBoolean();
  }
  return (
    <Modal closeModal={closeModal} title="Conectar con una clave secreta">
      <Warning
        list={list}
        text="ATENCIÓN: No se recomienda ingresar su clave secreta en ningún sitio web"
        classWarning="warning__red"
      />
      <CheckComponent
        text="Entiendo y acepto los riesgos de ingresar mi clave secreta."
        copy={view}
        handleChangeCopy={handleChangeCopy}
      />
      <div className="modal__buttons">
        <Button
          classNameBtn="button__complete"
          text="Continuar"
          handleClick={handleNext}
        />
        <Button
          classNameBtn="button__cancel"
          text="Cancelar"
          handleClick={closeModal}
        />
      </div>
    </Modal>
  );
}
