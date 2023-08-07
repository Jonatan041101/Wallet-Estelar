'use client';
import createAccount from '@/services/createAccount';
import { AccountGenerate } from '@/types/types';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import Key from './Key';
import ClipboardButton from '@/molecules/ClipboardButton';
import Warning from '@/molecules/Warning';

interface State {
  account: AccountGenerate;
}
const INTIAL_STATE: State['account'] = {
  publicKey: '',
  secretKey: '',
};
interface Props {
  handleClose: () => void;
}
const list: string[] = [
  `Es muy importante guardar su clave secreta y guardarla en un lugar seguro.`,
  `Si lo pierde, perderá el acceso a su cuenta. Nadie en el universo conocido podrá ayudarte a volver a entrar.`,
  `SDF no almacena una copia de sus claves y no puede ayudarlo a recuperar las claves perdidas.`,
  `Cualquiera que conozca su clave secreta tiene acceso a sus fondos.`,
  `Tiene varias opciones: Escriba su clave en una hoja de papel. Guárdelo en una caja fuerte. Guárdelo en un administrador de contraseñas. Usa una billetera de hardware. Pero nunca lo guarde sin cifrar en su computadora o en su correo electrónico.`,
  `Nota: Es posible que la conexión ingresando una clave secreta quede obsoleta en una versión futura de Account Viewer.`,
];
export default function Keys({ handleClose }: Props) {
  const [account, setAcount] = useState<State['account']>(INTIAL_STATE);
  useEffect(() => {
    setAcount(createAccount());
  }, []);
  const textCopy = `
 Public Key:
 ${account.publicKey}
 Secret Key:
 ${account.secretKey}
   `;
  return (
    <Modal closeModal={handleClose} title="Generar un nuevo par de llaves">
      <Warning list={list} text="ATENCIÓN:" classWarning="warning__red" />
      <Key keyText={account.publicKey} nameKey="Public Key" />
      <Key keyText={account.secretKey} nameKey="Secret Key" />

      <ClipboardButton text={textCopy} handleClose={handleClose} />
    </Modal>
  );
}
