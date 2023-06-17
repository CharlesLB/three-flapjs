import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getSimpleTimestamp } from '@/utils/timestamp';

const initialState: ILog[] = [
  {
    type: 'info',
    message: 'Welcome to the AFD Graph Visualizer!',
    timestamp: getSimpleTimestamp()
  }
];

export const logsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cleanLogs: (_state) => {
      return [
        {
          type: 'info',
          message: 'All logs has been cleaned!',
          timestamp: getSimpleTimestamp()
        }
      ];
    },
    addLog: (state, action: PayloadAction<ILog>) => {
      state.push({
        ...action.payload,
        timestamp: getSimpleTimestamp()
      });
    }
  }
});

export const { cleanLogs, addLog } = logsSlice.actions;

export const getLogs = (state: RootState) => state.logs;

export default logsSlice.reducer;
