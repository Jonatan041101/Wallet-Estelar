import Button from '@/atoms/Button';
import Input from '@/atoms/Input';
import React, { useState } from 'react';
import Form from '../Form';
import { errorMsg } from '@/utils/toastMsg';
import { ERROR_CONECTION, MessageError } from '@/utils/constants';
import { Keypair } from 'stellar-sdk';
import { VALIDATIONS } from '@/utils/Ivalidations';
import { useBearStore } from '@/store/store';
import useNavigate from '@/hooks/useNavigate';

export default function FormLogin() {
  const [secretKey, setSecretKey] = useState<string>('');
  const { handleNavigate } = useNavigate();
  const { login } = useBearStore((state) => ({
    login: state.getAcc,
  }));
  const handleLogin = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      if (!VALIDATIONS.secretKey.test(secretKey)) {
        return errorMsg(MessageError.ERROR_SECRET_KEY);
      }
      const account = Keypair.fromSecret(secretKey);
      const publicKey = account.publicKey();
      if (publicKey) {
        login({
          publicKey,
          secretKey,
        });
        handleNavigate('/wallet');
      }
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === ERROR_CONECTION.STRING_IS_INVALID
      ) {
        errorMsg(MessageError.INVALID_SECRET_KEY);
      }
    }
  };
  const handleChangeSecretKey = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setSecretKey(value);
  };
  return (
    <Form handleSubmit={handleLogin}>
      <Input
        handleChange={handleChangeSecretKey}
        placeholder="Comienza con S, ejemplo: SCHK…ZLJK"
        labelText="TU CLAVE SECRETA"
        type="password"
        value={secretKey}
      />
      <div className="modal__buttons">
        <Button
          text="Conectar"
          classNameBtn="button__complete"
          handleClick={() => {}}
        />
      </div>
    </Form>
  );
}
