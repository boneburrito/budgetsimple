import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGet, requestUpload } from 'utils/request';

import { type TransactionsState } from './types';

import { getResponseTransactions } from './utils';

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async () => requestGet('transactions'),
);

export const uploadTransactions = createAsyncThunk(
  'transactions/upload',
  async (files: FileList) => {
    const data = new FormData();
    data.append('file', files[0]);
    return requestUpload('transactions/upload/', data);
  },
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

    builder.addCase(uploadTransactions.fulfilled, (state, action) => {
      // const [data] = action.payload;

      return state;
    });

    builder.addCase(uploadTransactions.rejected, (state, action) => {
      console.log('zzz upload failed', action.error);
      return state;
    });
  },
});

export default transactionsSlice.reducer;
