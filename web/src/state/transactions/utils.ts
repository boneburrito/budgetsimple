import type { JsonArray, JsonObject } from 'types/data';
import type { Transaction } from './types';

// Bools
export const getBooleanValue = (obj: JsonObject, prop: string, defaultValue = false): boolean => {
  const value = obj[prop];
  return typeof value === 'boolean' ? value : defaultValue;
};

// Strings
export const getStringValue = (obj: JsonObject, prop: string, defaultValue = ''): string => {
  const value = obj[prop];
  return typeof value === 'string' ? value : defaultValue;
};

export const getNullableStringValue = (obj: JsonObject, prop: string, defaultValue: string | null = null): string | null => {
  const value = obj[prop];
  return typeof value === 'string' ? value : defaultValue;
};

// Numbers
export const getNumberValue = (obj: JsonObject, prop: string, defaultValue = 0): number => {
  const value = obj[prop];
  return typeof value === 'number' ? value : defaultValue;
};

export const getNullableNumberValue = (obj: JsonObject, prop: string, defaultValue: number | null = null): number | null => {
  const value = obj[prop];
  return typeof value === 'number' ? value : defaultValue;
};

export const getStringNumberValue = (obj: JsonObject, prop: string, defaultValue = 0): number => {
  const value = obj[prop];

  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value) ?? 0;
  }

  return defaultValue;
};

// Dates
export const getDateValue = (obj: JsonObject, prop: string, defaultValue = new Date()): Date => {
  const value = obj[prop];

  if (typeof value === 'number') {
    return new Date(value);
  } else if (typeof value === 'string') {
    return new Date(Date.parse(value));
  }

  return defaultValue;
};

export const getResponseTransaction = (value: JsonObject): Transaction => {
  const transaction: Transaction = {
    id: getStringValue(value, 'id'),
    userId: getStringValue(value, 'id'),
    amount: getStringNumberValue(value, 'amount'),
    isCredit: getBooleanValue(value, 'is_credit'),
    transactionType: getStringValue(value, 'transaction_type'),
    description: getStringValue(value, 'description'),
    status: getStringValue(value, 'status'),
    postedDate: getDateValue(value, 'posted_date'),
    createdAt: getDateValue(value, 'created_at'),
  };

  return transaction;
};

export const getResponseTransactions = (values: JsonArray): Transaction[] => values.map(getResponseTransaction);
