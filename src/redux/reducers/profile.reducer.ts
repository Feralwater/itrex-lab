import { createSlice } from '@reduxjs/toolkit';
import { ProfileStateType } from './reducers.types';
import profile from '../actions/profile.actions';

const initialState: ProfileStateType = {
  id: '',
  first_name: '',
  last_name: '',
  photo: '',
  role_name: '',
  isAuth: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profile.me, (state, { payload }) => {
        state.id = payload.id;
        state.first_name = payload.first_name;
        state.last_name = payload.last_name;
        state.photo = payload.photo;
        state.role_name = payload.role_name;
        state.isAuth = true;
      });
  },
});

export const profileReducer = profileSlice.reducer;
