import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionsPending } from 'redux/actions.types';
import { AllDoctors, CreateDoctorData, Doctors } from 'resources/doctors/doctors.types';
import { Users } from 'resources/patients/patients.types';
import { DoctorsState, UpdateDoctor } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  users: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
  updateUserStatus: FETCH_STATUS.IDLE,
  deleteUserStatus: FETCH_STATUS.IDLE,
  createUserStatus: FETCH_STATUS.IDLE,
} as DoctorsState;

export const getAllDoctorsSlice = createSlice({
  name: 'getAllDoctors',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AllDoctors>) => ({
      ...state,
      users: action.payload.users.map((user) => ({
        userID: user.id,
        firsName: user.first_name,
        lastName: user.last_name,
        photo: user.photo,
        roleName: user.role_name,
        specializationName: user.specialization_name,
      })),
      total: action.payload.total,
      responseStatus: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<ResolutionsPending>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
    updateDoctorFulfilled: (state, action:PayloadAction<Doctors>) => ({
      ...state,
      users: state.users.map((user) => (user.userID === action.payload.id
        ? {
          userID: action.payload.id,
          firsName: action.payload.first_name,
          lastName: action.payload.last_name,
          photo: action.payload.photo,
          roleName: action.payload.role_name,
          specializationName: action.payload.specialization_name,
        }
        : { ...user })),
      updateUserStatus: FETCH_STATUS.FULFILLED,
    }),
    updateDoctorPending: (state, action:PayloadAction<UpdateDoctor>) => ({ ...state, ...action.payload, updateUserStatus: FETCH_STATUS.LOADING }),
    updateDoctorFailed: (state) => ({ ...state, updateUserStatus: FETCH_STATUS.FAILED }),
    deleteDoctorFulfilled: (state, action:PayloadAction<string>) => ({
      ...state,
      users: state.users.filter((user) => (user.userID !== action.payload)),
      deleteUserStatus: FETCH_STATUS.FULFILLED,
    }),
    deleteDoctorPending: (state, action:PayloadAction<string>) => ({ ...state, id: action.payload, deleteUserStatus: FETCH_STATUS.LOADING }),
    deleteDoctorFailed: (state) => ({ ...state, deleteUserStatus: FETCH_STATUS.FAILED }),
    createDoctorFulfilled: (state, action: PayloadAction<Users>) => ({
      ...state,
      users: [
        {
          userID: action.payload.id,
          firsName: action.payload.first_name,
          lastName: action.payload.last_name,
          photo: action.payload.photo,
          roleName: action.payload.role_name,
          specializationName: state.specializationName,
        },
        ...state.users,
      ],
      createUserStatus: FETCH_STATUS.FULFILLED,
    }),
    createDoctorPending: (state, action: PayloadAction<CreateDoctorData>) => ({
      ...state,
      specializationName: action.payload.specializations[0],
      createUserStatus: FETCH_STATUS.LOADING,
    }),
    createDoctorFailed: (state) => ({ ...state, createUserStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectAllDoctors = (state: RootState) => state.getAllDoctors;
export const getAllDoctorsReducer = getAllDoctorsSlice.reducer;
