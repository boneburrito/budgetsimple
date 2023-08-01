import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestGet } from 'utils/request';

import { isColorArray, type ColorsState } from './types';

export const getColors = createAsyncThunk(
  'colors/getColors',
  async () => requestGet('transactions/colors'),
);

export const initialState: ColorsState = {
  colors: [],
};

export const colorsSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColors.fulfilled, (state, action) => {
      const [data] = action.payload;

      if (data?.type === 'array' && isColorArray(data.value)) {
        return {
          ...state,
          colors: data.value,
        };
      }

      return state;
    });

    builder.addCase(getColors.rejected, (state, action) => {
      console?.error('action', action.error);
      return state;
    });
  },
});

export default colorsSlice.reducer;
