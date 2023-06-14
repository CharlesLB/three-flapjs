import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: IPreferences = {
  exhibition: '3d',
  link: {
    width: 10,
    color: '#000000',
    background: '#ffffff'
  },
  node: {
    color: '#000000',
    background: '#ffffff'
  }
};

export const getPreviousPreferences = createAsyncThunk('preferences/getPreviousPreferences', () => {
  const response = window.localStorage.getItem('preferences');
  return response ? JSON.parse(response) : initialState;
});

export const preferencesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getPreviousPreferences: (state): void => {
      const response = window.localStorage.getItem('preferences');
      state = response ? JSON.parse(response) : initialState;
    },
    update: (state, action: PayloadAction<IPreferences>): void => {
      state = action.payload;
      window.localStorage.setItem('preferences', JSON.stringify(state));
    }
  }
});

export const { update } = preferencesSlice.actions;

export const getPreferences = (state: RootState) => state.preferences;

export default preferencesSlice.reducer;
