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
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload.id;
      // eslint-disable-next-line no-param-reassign
      state.first_name = action.payload.first_name;
      // eslint-disable-next-line no-param-reassign
      state.last_name = action.payload.last_name;
      // eslint-disable-next-line no-param-reassign
      state.photo = action.payload.photo;
      // eslint-disable-next-line no-param-reassign
      state.role_name = action.payload.role_name;
    });
});
