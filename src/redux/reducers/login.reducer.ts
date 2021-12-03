import { createSlice } from '@reduxjs/toolkit';
import { LoginStateType } from './reducers.types';
import { RootStateType } from '../store';
import { loginRepository } from '../../resources/loginRepository';
import login from '../actions/login.actions';

const initialState: LoginStateType = {
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

export const selectAccessToken = (state: RootStateType) => state.login.accessToken;

export const loginReducer = loginSlice.reducer;
