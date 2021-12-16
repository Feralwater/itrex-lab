import { createSlice } from '@reduxjs/toolkit';
import { ChangePasswordState } from './reducers.types';
import { ROLES } from '../../routes/constants';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { changePassword } from '../actions';
import { ChangePasswordFulfilled } from '../actions/actions.types';

const initialState = {
  userID: '',
  firstName: '',
  lastName: '',
  password: '',
  photo: '',
  roleID: '',
  status: FETCH_STATUS.IDLE,
} as ChangePasswordState;

export const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.fulfilled, (state, { payload }: { payload: ChangePasswordFulfilled}) => ({
        ...state,
        userID: payload.id,
        firstName: payload.first_name,
        lastName: payload.last_name,
        password: payload.password,
        photo: payload.photo,
        roleID: payload.role_id,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(changePassword.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(changePassword.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: ROLES.PUBLIC }));
  },
});

export const selectChangePassword = (state: RootState) => state.changePassword;

export const changePasswordReducer = changePasswordSlice.reducer;
