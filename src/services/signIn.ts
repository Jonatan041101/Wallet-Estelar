import { TransactionError } from '@/helpers/handlerError';
import { TypeTransaction } from '@/types/types';
import { MessageError } from '@/utils/constants';
import albedo from '@albedo-link/intent';
import { Keypair, Transaction, xdr } from 'stellar-sdk';

export const signTransactionWithAlbedo = async (
  transaction: TypeTransaction,
  keypair?: Keypair,
): Promise<TypeTransaction> => {
  try {
    const albedoXDR = await albedo.tx({
      xdr: transaction.toXDR(),
      network: process.env.NEXT_PUBLIC_TESTNET ?? 'testnet',
    });

    const transactionEnvelope = xdr.TransactionEnvelope.fromXDR(
      albedoXDR.signed_envelope_xdr,
      'base64',
    );

    return new Transaction(transactionEnvelope, '');
  } catch (error) {
    throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
  }
};
export const signTransactionWithPrivateKey = async (
  transaction: TypeTransaction,
  keypair?: Keypair,
): Promise<TypeTransaction> => {
  try {
    if (keypair) transaction.sign(keypair);
    return transaction;
  } catch (error) {
    throw new TransactionError(MessageError.ERROR_IN_TRANSACTION);
  }
};
