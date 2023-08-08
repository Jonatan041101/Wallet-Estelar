import Button from '@/atoms/Button';
import Input from '@/atoms/Input';
import React, { useState } from 'react';
import Form from '../Form';
import { errorMsg } from '@/utils/toastMsg';
import { MessageError } from '@/utils/constants';
import { Keypair } from 'stellar-sdk';
import { VALIDATIONS } from '@/utils/validations';
import { useBearStore } from '@/store/store';
export default function FormLogin() {
  const [secretKey, setSecretKey] = useState<string>('');
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
      }
    } catch (error) {
      const err = error as Error;
      if (err.message === 'invalid encoded string') {
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
