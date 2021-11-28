import { createSlice } from '@reduxjs/toolkit';
import { ProfileStateType } from './reducers.types';
import profile from '../actions/profile.actions';
import { ROLES, ROLES_API } from '../../routes/constants';
import { ProfileResponseType } from '../../resources/auth/auth.types';

const initialState: ProfileStateType = {
  id: '',
  firstName: '',
  lastName: '',
  photo: '',
  roleName: '',
  isAuth: false,
  status: 'idle',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profile.fulfilled, (state, { payload }: { payload :ProfileResponseType}) => { //
        if (payload) {
          state.id = payload.id;
          state.firstName = payload.first_name;
          state.lastName = payload.last_name;
          state.photo = payload.photo;
          // @ts-ignore
          state.roleName = ROLES_API[payload.role_name];
          state.isAuth = true;
          state.status = 'fulfilled';
        } else {
          state.status = 'failed';
          state.roleName = ROLES.PUBLIC;
        }
      });
    builder
      .addCase(profile.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(profile.failed, (state) => {
        state.status = 'failed';
        state.roleName = ROLES.PUBLIC;
      });
  },
});

export const profileReducer = profileSlice.reducer;
