import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationState } from './reducers.types';
import { loginRepository } from '../../resources/loginRepository';
import { FETCH_STATUS } from './constants';
import { RegistrationFulfilled, RegistrationPending } from '../actions.types';

const initialState = {
  accessToken: loginRepository.getAccessToken() || '',
  status: FETCH_STATUS.IDLE,
} as RegistrationState;

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<RegistrationFulfilled>) => ({
      ...state,
      accessToken: action.payload.access_token,
      refreshToken: action.payload.refresh_token,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<RegistrationPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const registrationReducer = registrationSlice.reducer;
