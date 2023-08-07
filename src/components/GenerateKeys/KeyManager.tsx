'use client';
import { useReducer } from 'react';
import { INITIAL_STATE, reducer } from './reducerGeneratorKeys';
import Button from '@/atoms/Button';
import WarningLogin from './WarningLogin';
import Login from './Login';
import ConfirmGenerate from './ConfirmGenerate';
import Keys from './Keys';
export default function KeyManager() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { viewConfirm, viewKeysGenerate, viewLogin, viewWarning } = state.modal;

  const handleOpenConfirm = () => {
    dispatch({ type: '@key/view-confirm-generate', payload: true });
  };
  const handleCloseConfirm = () => {
    dispatch({ type: '@key/view-confirm-generate', payload: false });
  };
  const handleOpenViewKeys = () => {
    dispatch({ type: '@key/view-keys', payload: true });
  };
  const handleCloseViewKeys = () => {
    dispatch({ type: '@key/view-keys', payload: false });
  };
  const handleOpenWarningLogin = () => {
    dispatch({ type: '@key/view-warning', payload: true });
  };
  const handleCloseWarningLogin = () => {
    dispatch({ type: '@key/view-warning', payload: false });
  };
  const handleOpenLogin = () => {
    dispatch({ type: '@key/login', payload: true });
  };
  const handleCloseLogin = () => {
    dispatch({ type: '@key/login', payload: false });
  };
  const handleContinueGenerateKey = () => {
    handleCloseConfirm();
    handleOpenViewKeys();
  };
  const handleContinueLogin = () => {
    handleCloseWarningLogin();
    handleOpenLogin();
  };

  return (
    <div className="generator">
      <Button
        classNameBtn="button__under"
        handleClick={handleOpenWarningLogin}
        text="Conectar con una clave secreta"
      />
      <Button
        classNameBtn="button__under"
        handleClick={handleOpenConfirm}
        text="Generar par de claves para una nueva cuenta"
      />
      {viewWarning && (
        <WarningLogin
          handleNext={handleContinueLogin}
          closeModal={handleCloseWarningLogin}
        />
      )}
      {viewLogin && <Login closeModal={handleCloseLogin} />}
      {viewConfirm && (
        <ConfirmGenerate
          handleClose={handleCloseConfirm}
          handleContinue={handleContinueGenerateKey}
        />
      )}
      {viewKeysGenerate && <Keys handleClose={handleCloseViewKeys} />}
    </div>
  );
}
