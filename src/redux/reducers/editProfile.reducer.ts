import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { EditProfileState } from './reducers.types';
import { editProfile } from '../actions';
import { NewDoctorProfileResponse } from '../../resources/profile/profile.types';
import { FETCH_STATUS } from './constants';

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProfile.fulfilled, (state, { payload }: { payload: NewDoctorProfileResponse }) => ({
        ...state,
        id: payload.id,
        firstName: payload.first_name,
        lastName: payload.last_name,
        photo: payload.photo,
        roleName: payload.role_name,
        specializationName: payload.specialization_name,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(editProfile.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(editProfile.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED }));
  },
});

export const selectEditProfile = (state: RootState) => state.editProfile;

export const editProfileReducer = editProfileSlice.reducer;
