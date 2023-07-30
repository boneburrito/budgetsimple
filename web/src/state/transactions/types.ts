export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  isCredit: boolean;
  transactionType: string;
  description: string;
  status: string;
  postedDate: Date;
  createdAt: Date;
}

export interface TransactionsState {
  transactions: Transaction[];
}
