import { createSlice } from '@reduxjs/toolkit';
import { NotificationState } from './reducers.types';
import { notificationError, notificationSuccess } from '../actions';
import { RootState } from '../store';

const initialState = {
  isSuccess: true,
  successMessageText: '',
  errorMessageText: '',
} as NotificationState;

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(notificationSuccess, (state, { payload }) => ({ ...state, isSuccess: true, successMessageText: payload }));
    builder
      .addCase(notificationError, (state, { payload }) => ({ ...state, isSuccess: false, errorMessageText: payload }));
  },
});

export const selectNotification = (state: RootState) => state.notification;

export const notificationReducer = notificationSlice.reducer;
