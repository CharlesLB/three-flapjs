import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const defaultPreferences: IPreferences = {
  exhibition: '2d',
  timer: 1000,
  link: {
    color: '#ffffff',
    background: '#ffffff',
    particles: true
  },
  node: {
    color: '#000000',
    background: '#ffffff',
    autoAdjust: false
  }
};

const initialState: IPreferences = defaultPreferences;

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
    },
    resetPreferences: (state) => {
      state = initialState;
      window.localStorage.setItem('preferences', JSON.stringify(state));
      return state;
    }
  }
});

export const { update, resetPreferences, getPreviousPreferences } = preferencesSlice.actions;

export const getPreferences = (state: RootState) => state.preferences;

export default preferencesSlice.reducer;
