import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGet } from 'utils/request';

import { isTestObj, type TestState } from './types';

export const getTest = createAsyncThunk(
  'test/getTest',
  async () => requestGet('bonebudget/test'),
);

export const initialState: TestState = {
  id: null,
};

export const testSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTest.fulfilled, (state, action) => {
      const [data] = action.payload;

      if (data?.type === 'object' && isTestObj(data.value)) {
        return {
          ...state,
          id: data.value.test,
        };
      }

      return {
        ...state,
        id: `${data}`,
      };
    });

    builder.addCase(getTest.rejected, (state, action) => {
      console?.error('action', action.error);
      return state;
    });
  },
});

export default testSlice.reducer;
