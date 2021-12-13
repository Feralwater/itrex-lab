import { createSlice } from '@reduxjs/toolkit';
import { ProfileState } from './reducers.types';
import { ROLES, ROLES_API } from '../../routes/constants';
import { ProfileResponse } from '../../resources/auth/auth.types';
import { RootState } from '../store';
import { profile } from '../actions';
import { FETCH_STATUS } from './constants';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  photo: '',
  roleName: '',
  isAuth: false,
  status: FETCH_STATUS.IDLE,
} as ProfileState;

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profile.fulfilled, (state, { payload }: { payload :ProfileResponse}) => {
        if (payload) {
          state.id = payload.id;
          state.firstName = payload.first_name;
          state.lastName = payload.last_name;
          state.photo = payload.photo;
          state.roleName = ROLES_API[payload.role_name];
          state.isAuth = true;
          state.status = FETCH_STATUS.FULFILLED;
        } else {
          state.status = FETCH_STATUS.FAILED;
          state.roleName = ROLES.PUBLIC;
        }
      });
    builder
      .addCase(profile.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(profile.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: ROLES.PUBLIC }));
  },
});

export const selectProfile = (state: RootState) => state.profile;

export const profileReducer = profileSlice.reducer;
