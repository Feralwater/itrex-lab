import { createSlice } from '@reduxjs/toolkit';
import { RegistrationState } from './reducers.types';
import { loginRepository } from '../../resources/loginRepository';
import registration from '../actions/registration.actions';

const initialState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: 'idle',
} as RegistrationState;

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.accessToken = payload.access_token;
        state.refreshToken = payload.refresh_token;
      });

    builder
      .addCase(registration.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(registration.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const registrationReducer = registrationSlice.reducer;
