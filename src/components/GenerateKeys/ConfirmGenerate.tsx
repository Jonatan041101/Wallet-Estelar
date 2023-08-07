import React from 'react';
import Modal from '../Modal';
import Button from '@/atoms/Button';
import Warning from '@/molecules/Warning';

interface Props {
  handleContinue: () => void;
  handleClose: () => void;
}
const list: string[] = [
  ` Pegar su clave secreta lo hace vulnerable a accidentes, ataques y estafas
que pueden provocar la pérdida de fondos.`,
  `Es más seguro crear una cuenta utilizando métodos que no compartan su clave
secreta con sitios web, como carteras de hardware o extensiones de
navegador.`,
];
export default function ConfirmGenerate({
  handleClose,
  handleContinue,
}: Props) {
  return (
    <Modal closeModal={handleClose} title="Generar un nuevo par de llaves">
      <Warning
        classWarning="warning__red"
        list={list}
        text="ATENCIÓN: Las carteras de claves secretas no son seguras:"
      />
      <div className="modal__buttons">
        <Button
          classNameBtn="button__complete"
          text="Continuar"
          handleClick={handleContinue}
        />
        <Button
          classNameBtn="button__cancel"
          text="Cancelar"
          handleClick={handleClose}
        />
      </div>
    </Modal>
  );
}
