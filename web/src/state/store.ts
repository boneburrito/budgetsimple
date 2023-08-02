import { configureStore } from '@reduxjs/toolkit';

import colorsReducer from './colors/reducer';
import transactionsReducer from './transactions/reducer';

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
