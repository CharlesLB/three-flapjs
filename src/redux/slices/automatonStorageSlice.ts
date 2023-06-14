import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IAutomatonStorage } from '@/@types/redux/AutomatonStorage';

const initialState: IAutomatonStorage = {
  mode: 'none',
  link: null,
  node: null
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
    setLink: (state, action: PayloadAction<IAutomatonStorage['link']>): void => {
      state.link = action.payload;
    },
    setNode: (state, action: PayloadAction<IAutomatonStorage['node']>): void => {
      state.node = action.payload;
    }
  }
});

export const { changeMode, setLink, setNode } = automatonSlice.actions;

export const getAutomatonStorage = (state: RootState) => state.automatonStorage;

export default automatonSlice.reducer;
