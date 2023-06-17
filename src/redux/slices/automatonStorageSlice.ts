import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IAutomatonStorage } from '@/@types/redux/AutomatonStorage';

const initialState: IAutomatonStorage = {
  mode: 'none',
  action: {
    type: '',
    data: null
  }
};

export const getPreviousPreferences = createAsyncThunk('preferences/getPreviousPreferences', () => {
  const response = window.localStorage.getItem('preferences');
  return response ? JSON.parse(response) : initialState;
});

export const automatonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<IAutomatonStorage['mode']>): void => {
      state.mode = action.payload;
    },
    changeAction: (state, action: PayloadAction<IAutomatonStorage['action']>): void => {
      state.action = action.payload;
    }
  }
});

export const { changeMode, changeAction } = automatonSlice.actions;

export const getAutomatonStorage = (state: RootState) => state.automatonStorage;

export default automatonSlice.reducer;
