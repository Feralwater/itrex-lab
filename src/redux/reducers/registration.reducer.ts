import { createSlice } from '@reduxjs/toolkit';
import { RegistrationState } from './reducers.types';
import { RootState } from '../store';
import { loginRepository } from '../../resources/loginRepository';
import registration from '../actions/registration.actions';

const initialState: RegistrationState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: 'idle',
};

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

export const selectAccessToken = (state: RootState) => state.registration.accessToken;

export const registrationReducer = registrationSlice.reducer;
