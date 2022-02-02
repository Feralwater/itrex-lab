import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginState } from './reducers.types';
import { loginRepository } from '../../resources/loginRepository';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { LoginFulfilled, LoginPending } from '../actions/actions.types';

const initialState: LoginState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: FETCH_STATUS.IDLE,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<LoginFulfilled>) => ({
      ...state,
      accessToken: action.payload.access_token,
      refreshToken: action.payload.refresh_token,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<LoginPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectAccessToken = (state: RootState) => state.login.accessToken;
export const loginReducer = loginSlice.reducer;
