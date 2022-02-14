import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditProfileResponse, ProfileResponse } from 'resources/auth/auth.types';
import { ProfileState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  photo: '',
  status: FETCH_STATUS.IDLE,
} as ProfileState;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<ProfileResponse>) => ({
      ...state,
      id: action.payload.id,
      firstName: action.payload.first_name,
      lastName: action.payload.last_name,
      photo: action.payload.photo,
      roleName: action.payload.role_name,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state) => ({ ...state, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: null }),
    editProfileFulfilled: (state, action: PayloadAction<EditProfileResponse>) => ({
      ...state,
      id: action.payload.id,
      firstName: action.payload.first_name,
      lastName: action.payload.last_name,
      photo: action.payload.photo,
      roleName: action.payload.role_name,
      status: FETCH_STATUS.FULFILLED,
    }),
    editProfilePending: (state, action: PayloadAction<FormData>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    editProfileFailed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectProfile = (state: RootState) => state.profile;
export const profileReducer = profileSlice.reducer;
