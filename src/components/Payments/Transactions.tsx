'use client';
import useTransaction from '@/hooks/useTransaction';
import React from 'react';
import RowTransaction from './RowTransaction';
import Button from '@/atoms/Button';
import { MessageLoad, MessageSucces } from '@/utils/constants';
import { succesLoaderMsg, succesMsgAsync } from '@/utils/toastMsg';

export default function Transactions() {
  const { transactions, handleGetTransactions } = useTransaction();
  const handleReloadTransactions = async () => {
    try {
      const notificationId = succesLoaderMsg(MessageLoad.WAIT_A_MOMENT);

      await handleGetTransactions();
      succesMsgAsync(notificationId, MessageSucces.HISTORY_UPDATE);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <div className="transaction">
      <div className="transaction__title">
        <h3 className="transaction__h3">Historial de Pagos</h3>
        <Button
          classNameBtn="button__complete"
          handleClick={handleReloadTransactions}
          text=""
          id="reload-history"
          icon="Reload"
        />
      </div>
      <table className="transaction__table">
        <thead className="transaction__thead">
          <tr className="transaction__tr">
            <th className="transaction__th">Fecha y Hora</th>
            <th className="transaction__th">Dirección</th>
            <th className="transaction__th">Cantidad</th>
            <th className="transaction__th">Id de la Operación</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <RowTransaction transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
