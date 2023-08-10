'use client';
import useTransaction from '@/hooks/useTransaction';
import React from 'react';
import RowTransaction from './RowTransaction';

export default function Transactions() {
  const { transactions } = useTransaction();
  return (
    <div className="transaction">
      <h3 className="transaction__h3">Historial de Pagos</h3>
      <table className="transaction__table">
        <thead className="transaction__thead">
          <tr className="transaction__tr">
            <th className="transaction__th">Fecha y Hora</th>
            <th className="transaction__th">Dirección</th>
            <th className="transaction__th">Cantidad</th>
            <th className="transaction__th">Memo</th>
            <th className="transaction__th">Id de Operación</th>
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
