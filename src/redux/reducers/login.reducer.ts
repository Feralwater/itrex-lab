import { createSlice } from '@reduxjs/toolkit';
import { LoginState } from './reducers.types';
import { loginRepository } from '../../resources/loginRepository';
import login from '../actions/login.actions';
import { RootState } from '../store';

const initialState: LoginState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: 'idle',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.accessToken = payload.access_token;
        state.refreshToken = payload.refresh_token;
      });

    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      });

    builder
      .addCase(login.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectAccessToken = (state: RootState) => state.login.accessToken;

export const loginReducer = loginSlice.reducer;
