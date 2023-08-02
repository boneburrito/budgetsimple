export interface Transaction {
  amount: number;
  createdAt: string;
  description: string;
  id: string;
  isCredit: boolean;
  postedDate: string;
  status: string;
  transactionType: string;
  userId: string;
}

export interface TransactionsState {
  transactions: Transaction[];
}
