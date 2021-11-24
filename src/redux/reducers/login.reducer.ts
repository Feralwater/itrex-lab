import { createSlice } from '@reduxjs/toolkit';
import { LoginStateType } from './reducers.types';
import { RootStateType } from '../store';
import { loginRepository } from '../../resources/loginRepository';
import { login } from '../actions/login.actions';

const initialState: LoginStateType = {
  accessToken: loginRepository.getAccessToken() || '',
  status: 'idle',
  id: '',
  first_name: '',
  last_name: '',
  photo: '',
  role_name: '',
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
      .addCase(login.me, (state, { payload }) => {
        state.id = payload.id;
        state.first_name = payload.first_name;
        state.last_name = payload.last_name;
        state.photo = payload.photo;
        state.role_name = payload.role_name;
      });

    // builder
    //   .addCase(login.pending, (state, { payload }) => {
    //     state.status = 'loading';
    //   });

    // builder
    //   .addCase(login.failed, (state, { payload }) => {
    //     state.error = payload;
    //   });
  },
});

export const selectAccessToken = (state: RootStateType) => state.login.accessToken;

export const loginReducer = loginSlice.reducer;
