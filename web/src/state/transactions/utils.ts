import type { JsonArray, JsonObject } from 'types/data';
import type { Transaction } from './types';

import { getBooleanValue, getStringValue, getStringNumberValue } from 'utils/data';

export const getResponseTransaction = (value: JsonObject): Transaction => {
  const transaction: Transaction = {
    id: getStringValue(value['id']),
    userId: getStringValue(value['id']),
    amount: getStringNumberValue(value['amount']),
    isCredit: getBooleanValue(value['is_credit']),
    transactionType: getStringValue(value['transaction_type']),
    description: getStringValue(value['description']),
    status: getStringValue(value['status']),
    postedDate: getStringValue(value['posted_date']),
    createdAt: getStringValue(value['created_at']),
  };

  return transaction;
};

export const getResponseTransactions = (values: JsonArray): Transaction[] => values.map(getResponseTransaction);
