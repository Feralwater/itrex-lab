import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from './reducers.types';
import { loginRepository } from '../../resources/loginRepository';
import { login } from '../actions';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState: LoginState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: FETCH_STATUS.IDLE,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => ({
        ...state, accessToken: payload.access_token, refreshToken: payload.refresh_token, status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(login.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(login.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED }));
  },
});

export const selectAccessToken = (state: RootState) => state.login.accessToken;

export const loginReducer = loginSlice.reducer;
