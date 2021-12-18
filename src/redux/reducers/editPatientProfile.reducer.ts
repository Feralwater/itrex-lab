import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { EditPatientProfileState } from './reducers.types';
import { editPatientProfile } from '../actions';
import { NewPatientProfileResponse } from '../../resources/profile/profile.types';
import { FETCH_STATUS } from './constants';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  photo: '',
  roleName: '',
  status: FETCH_STATUS.IDLE,
} as EditPatientProfileState;

export const editPatientProfileSlice = createSlice({
  name: 'editPatientProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editPatientProfile.fulfilled, (state, { payload }: { payload: NewPatientProfileResponse }) => ({
        ...state,
        id: payload.id,
        firstName: payload.first_name,
        lastName: payload.last_name,
        photo: payload.photo,
        roleName: payload.role_name,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(editPatientProfile.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(editPatientProfile.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED }));
  },
});

export const selectEditPatientProfile = (state: RootState) => state.editPatientProfile;

export const editPatientProfileReducer = editPatientProfileSlice.reducer;
