import type { JsonArray, JsonObject } from 'types/data';
import { isTransactionStatus, isTransactionType, type Transaction } from './types';

import { getBooleanValue, getEnumValue, getStringValue, getStringNumberValue } from 'utils/data';

export const getResponseTransaction = (value: JsonObject): Transaction => {
  const transaction: Transaction = {
    id: getStringValue(value['id']),
    userId: getStringValue(value['id']),
    amount: getStringNumberValue(value['amount']),
    isCredit: getBooleanValue(value['is_credit']),
    transactionType: getEnumValue(value['transaction_type'], isTransactionType, 'UNKNOWN'),
    description: getStringValue(value['description']),
    status: getEnumValue(value['status'], isTransactionStatus, 'UNKNOWN'),
    postedDate: getStringValue(value['posted_date']),
    createdAt: getStringValue(value['created_at']),
  };

  return transaction;
};

export const getResponseTransactions = (values: JsonArray): Transaction[] => values.map(getResponseTransaction);
