import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: IPreferences = {
  exhibition: '2d',
  link: {
    color: '#000000',
    background: '#ffffff',
    particles: true
  },
  node: {
    color: '#000000',
    background: '#ffffff',
    autoAdjust: false
  }
};

export const getPreviousPreferences = createAsyncThunk('preferences/getPreviousPreferences', () => {
  const response = window.localStorage.getItem('preferences');
  return response ? JSON.parse(response) : initialState;
});

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    getPreviousPreferences: (state) => {
      const response = window.localStorage.getItem('preferences');
      state = response ? JSON.parse(response) : initialState;
      return state;
    },
    update: (state, action: PayloadAction<IPreferences>) => {
      state = action.payload;
      window.localStorage.setItem('preferences', JSON.stringify(state));
      return state;
    }
  }
});

export const { update } = preferencesSlice.actions;

export const getPreferences = (state: RootState) => state.preferences;

export default preferencesSlice.reducer;
