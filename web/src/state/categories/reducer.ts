import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGet } from 'utils/request';

import { type CategoriesState } from './types';

import { getResponseMerchants } from './utils';

export const getMerchants = createAsyncThunk(
  'categories/getMerchants',
  async () => requestGet('categories/merchants'),
);

export const initialState: CategoriesState = {
  merchants: [],
};

export const merchantsSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMerchants.fulfilled, (state, action) => {
      const [data] = action.payload;

      if (data?.type === 'array') {
        return {
          ...state,
          merchants: getResponseMerchants(data.value),
        };
      }

      return state;
    });

    builder.addCase(getMerchants.rejected, (state, action) => {
      return state;
    });
  },
});

export default merchantsSlice.reducer;
