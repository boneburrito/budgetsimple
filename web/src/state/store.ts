import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './categories/reducer';
import transactionsReducer from './transactions/reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
