import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import preferencesSlice from './slices/preferencesSlice';

export const store = configureStore({
  reducer: {
    preferences: preferencesSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
