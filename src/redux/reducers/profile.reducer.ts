import { createAction, createReducer } from '@reduxjs/toolkit';
import { ProfileStateType } from './reducers.types';

const initialState: ProfileStateType = {
  id: '',
  first_name: '',
  last_name: '',
  photo: '',
  role_name: '',
};

export const addProfileData = createAction<ProfileStateType, 'profile/addProfileData'>('profile/addProfileData');

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addProfileData, (state, action) => {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.photo = action.payload.photo;
      state.role_name = action.payload.role_name;
    });
});
