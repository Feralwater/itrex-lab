import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { EditProfileState } from './reducers.types';
import { editProfile } from '../actions';
import { NewDoctorProfileResponse } from '../../resources/profile/profile.types';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  photo: '',
  roleName: '',
  specializationName: '',
  status: 'idle',
} as EditProfileState;

export const editProfileSlice = createSlice({
  name: 'editProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProfile.fulfilled, (state, { payload }: { payload :NewDoctorProfileResponse}) => {
        state.id = payload.id;
        state.firstName = payload.first_name;
        state.lastName = payload.last_name;
        state.photo = payload.photo;
        state.roleName = payload.role_name;
        state.specializationName = payload.specialization_name;
        state.status = 'fulfilled';
      });
    builder
      .addCase(editProfile.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(editProfile.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectEditProfile = (state: RootState) => state.editProfile;

export const editProfileReducer = editProfileSlice.reducer;
