import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import preferencesSlice from './slices/preferencesSlice';
import automatonStorageSlice from './slices/automatonStorageSlice';
import logsSlice from './slices/logsSlice';

export const store = configureStore({
  reducer: {
    preferences: preferencesSlice,
    automatonStorage: automatonStorageSlice,
    logs: logsSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
