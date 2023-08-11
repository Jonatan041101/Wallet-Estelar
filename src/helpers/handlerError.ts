import { MessageError } from '@/utils/constants';

export class ValidationError extends Error {
  constructor(message: MessageError) {
    super(message);
    this.name = 'Validation Error';
  }
}
export class TransactionError extends Error {
  constructor(message: MessageError) {
    super(message);
    this.name = 'Transaction Error';
  }
}
export class SubmitError extends Error {
  constructor(message: MessageError) {
    super(message);
    this.name = 'Submit Error';
  }
}
export class LoadError extends Error {
  constructor(message: MessageError) {
    super(message);
    this.name = 'Load Error';
  }
}
