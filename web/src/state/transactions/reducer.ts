import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGet } from 'utils/request';

import { type TransactionsState } from './types';

import { getResponseTransactions } from './utils';

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async () => requestGet('transactions'),
);

export const getMerchantCategories = createAsyncThunk(
  'transactions/getMerchantCategories',
  async () => requestGet('transactions/merchant-categories'),
);

export const initialState: TransactionsState = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      const [data] = action.payload;

      if (data?.type === 'array') {
        return {
          ...state,
          transactions: getResponseTransactions(data.value),
        };
      }

      return state;
    });

    builder.addCase(getTransactions.rejected, (state, action) => {
      return state;
    });
  },
});

export default transactionsSlice.reducer;
