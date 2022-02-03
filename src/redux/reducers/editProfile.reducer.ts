import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { EditProfileState } from './reducers.types';
import { FETCH_STATUS } from './constants';
import { EditProfileResponse } from '../../resources/auth/auth.types';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  photo: '',
  roleName: '',
  specializationName: '',
  status: FETCH_STATUS.IDLE,
} as EditProfileState;

export const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<EditProfileResponse>) => ({
      ...state,
      id: action.payload.id,
      firstName: action.payload.first_name,
      lastName: action.payload.last_name,
      photo: action.payload.photo,
      roleName: action.payload.role_name,
      specializationName: action.payload.specialization_name,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<FormData>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectEditProfile = (state: RootState) => state.editProfile;

export const editProfileReducer = editProfileSlice.reducer;
