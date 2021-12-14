import { createSlice } from '@reduxjs/toolkit';
import { RegistrationState } from './reducers.types';
import { loginRepository } from '../../resources/loginRepository';
import { registration } from '../actions';
import { FETCH_STATUS } from './constants';

const initialState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: FETCH_STATUS.IDLE,
} as RegistrationState;

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, { payload }) => ({
        ...state, accessToken: payload.access_token, refreshToken: payload.refresh_token, status: FETCH_STATUS.FULFILLED,
      }));

    builder
      .addCase(registration.pending, (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }));
    builder
      .addCase(registration.failed, (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }));
  },
});

export const registrationReducer = registrationSlice.reducer;
