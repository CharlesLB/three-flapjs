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
      return action.payload;
    },
    closeModal: () => {
      return initialState;
    }
  }
});

export const { closeModal, callModal } = modalSlice.actions;

export const getModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
