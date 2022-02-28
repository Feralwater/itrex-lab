import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionsPending } from 'redux/actions.types';
import { AllPatients } from 'resources/patients/patients.types';
import { AllUsersState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  users: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
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
  },
});

export const selectAllPatients = (state: RootState) => state.getAllPatients;
export const getAllPatientsReducer = getAllPatientsSlice.reducer;
