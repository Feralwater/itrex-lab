import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationState } from './reducers.types';
import { RootState } from '../store';

const initialState = {
  isSuccess: true,
  successMessageText: '',
  errorMessageText: '',
} as NotificationState;

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationSuccess: (state, action: PayloadAction<string>) => ({ ...state, isSuccess: true, successMessageText: action.payload }),
    notificationError: (state, action: PayloadAction<string>) => ({ ...state, isSuccess: false, errorMessageText: action.payload }),
  },
});

export const selectNotification = (state: RootState) => state.notification;
export const notificationReducer = notificationSlice.reducer;
