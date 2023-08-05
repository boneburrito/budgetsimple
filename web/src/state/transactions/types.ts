export type TransactionStatus = 'CLEARED' | 'PENDING' | 'UNKNOWN';

export const TransactionStatuses: TransactionStatus[] = ['CLEARED', 'PENDING'];
const TransactionStatusStrs: readonly string[] = TransactionStatuses;

export const isTransactionStatus = (value: string): value is TransactionStatus => TransactionStatusStrs.includes(value);

export type TransactionType = 'ACH' | 'ATM' | 'CHECK' | 'DEBIT' | 'UNKNOWN' | 'WIRE';
const TransactionTypes: TransactionType[] = ['ACH', 'ATM', 'CHECK', 'DEBIT', 'WIRE'];
const TransactionTypeStrs: string[] = TransactionTypes;

export const isTransactionType = (value: string): value is TransactionType => TransactionTypeStrs.includes(value);

export interface Transaction {
  amount: number;
  createdAt: string;
  description: string;
  id: string;
  isCredit: boolean;
  postedDate: string;
  status: TransactionStatus;
  transactionType: TransactionType;
  userId: string;
}

export interface TransactionsState {
  transactions: Transaction[];
}
