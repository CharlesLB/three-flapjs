import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IAutomatonStorage } from '@/@types/redux/AutomatonStorage';

const initialState: IAutomatonStorage = {
  mode: 'none',
  action: {
    type: '',
    data: null
  }
};

export const automatonStorageSlice = createSlice({
  name: 'automatonStorage',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<IAutomatonStorage['mode']>) => {
      state.mode = action.payload;
      return state;
    },
    changeAction: (state, action: PayloadAction<IAutomatonStorage['action']>) => {
      state.action = action.payload;
      return state;
    },
    resetAction: (state) => {
      state.action = initialState.action;
      return state;
    }
  }
});

export const { changeMode, changeAction, resetAction } = automatonStorageSlice.actions;

export const getAutomatonStorage = (state: RootState) => state.automatonStorage;

export default automatonStorageSlice.reducer;
