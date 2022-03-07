import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionsPending } from 'redux/actions.types';
import { AllPatients, Users } from 'resources/patients/patients.types';
import { AllUsersState, UpdateUser } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  users: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
  updateUserStatus: FETCH_STATUS.IDLE,
  deleteUserStatus: FETCH_STATUS.IDLE,
} as AllUsersState;

export const getAllPatientsSlice = createSlice({
  name: 'getAllPatients',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AllPatients>) => ({
      ...state,
      users: action.payload.users.map((user) => ({
        userID: user.id,
        firsName: user.first_name,
        lastName: user.last_name,
        photo: user.photo,
        roleName: user.role_name,
      })),
      total: action.payload.total,
      responseStatus: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<ResolutionsPending>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
    updatePatientFulfilled: (state, action:PayloadAction<Users>) => ({
      ...state,
      users: state.users.map((user) => (user.userID === action.payload.id
        ? {
          userID: action.payload.id,
          firsName: action.payload.first_name,
          lastName: action.payload.last_name,
          photo: action.payload.photo,
          roleName: action.payload.role_name,
        }
        : { ...user })),
      updateUserStatus: FETCH_STATUS.FULFILLED,
    }),
    updatePatientPending: (state, action:PayloadAction<UpdateUser>) => ({ ...state, ...action.payload, updateUserStatus: FETCH_STATUS.LOADING }),
    updatePatientFailed: (state) => ({ ...state, updateUserStatus: FETCH_STATUS.FAILED }),
    deletePatientFulfilled: (state, action:PayloadAction<string>) => ({
      ...state,
      users: state.users.filter((user) => (user.userID !== action.payload)),
      deleteUserStatus: FETCH_STATUS.FULFILLED,
    }),
    deletePatientPending: (state, action:PayloadAction<string>) => ({ ...state, id: action.payload, deleteUserStatus: FETCH_STATUS.LOADING }),
    deletePatientFailed: (state) => ({ ...state, deleteUserStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectAllPatients = (state: RootState) => state.getAllPatients;
export const getAllPatientsReducer = getAllPatientsSlice.reducer;
