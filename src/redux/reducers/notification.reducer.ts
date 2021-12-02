import { createSlice } from '@reduxjs/toolkit';
import { NotificationState } from './reducers.types';
import { notificationError, notificationSuccess } from '../actions/notification.actions';

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
      .addCase(notificationSuccess, (state, { payload }) => {
        state.isSuccess = true;
        state.successMessageText = payload;
      });

    builder
      .addCase(notificationError, (state, { payload }) => {
        state.isSuccess = false;
        state.errorMessageText = payload;
      });
  },
});

export const notificationReducer = notificationSlice.reducer;
