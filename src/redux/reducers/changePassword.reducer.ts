import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangePasswordState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { ChangePasswordFulfilled, ChangePasswordPending } from '../actions/actions.types';

const initialState = {
  status: FETCH_STATUS.IDLE,
} as ChangePasswordState;

export const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<ChangePasswordFulfilled>) => ({ ...state, ...action.payload, status: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<ChangePasswordPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectChangePassword = (state: RootState) => state.changePassword;
export const changePasswordReducer = changePasswordSlice.reducer;
