import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: IModalSlice = {
  type: null
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    callModal: (_state, action: PayloadAction<IModalSlice>) => {
      console.log(action.payload);
      return action.payload;
    },
    resetModal: () => {
      return initialState;
    }
  }
});

export const { resetModal, callModal } = modalSlice.actions;

export const getModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
