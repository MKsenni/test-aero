import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { filterApi } from './filterApi';

export const store = configureStore({
  reducer: {
    [filterApi.reducerPath]: filterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterApi.middleware),
});

export const makeStore: MakeStore<typeof store> = () => store;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
