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
      .addCase(profile.fulfilled, (state, { payload }: { payload :ProfileResponse }) => ({
        ...state,
        id: payload.id,
        firstName: payload.first_name,
        lastName: payload.last_name,
        photo: payload.photo,
        roleName: ROLES_API[payload.role_name],
        isAuth: true,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(profile.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(profile.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: ROLES.PUBLIC }));
  },
});

export const selectProfile = (state: RootState) => state.profile;

export const profileReducer = profileSlice.reducer;
