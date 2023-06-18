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
    changeMode: (state, action: PayloadAction<IAutomatonStorage['mode']>): void => {
      state.mode = action.payload;
    },
    changeAction: (state, action: PayloadAction<IAutomatonStorage['action']>): void => {
      state.action = action.payload;
    },
    resetAction: (state): void => {
      state.action = initialState.action;
    }
  }
});

export const { changeMode, changeAction, resetAction } = automatonStorageSlice.actions;

export const getAutomatonStorage = (state: RootState) => state.automatonStorage;

export default automatonStorageSlice.reducer;
