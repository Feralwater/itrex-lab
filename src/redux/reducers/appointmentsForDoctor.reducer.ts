import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { AppointmentsForDoctorState } from './reducers.types';
import {
  AppointmentsForDoctorFulfilled,
  AppointmentsForDoctorPending, DeleteAppointmentFulfilled,
  DeleteAppointmentPending,
} from '../actions.types';

const initialState = {
  appointments: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
  entityStatus: FETCH_STATUS.IDLE,
} as AppointmentsForDoctorState;

export const appointmentsForDoctorSlice = createSlice({
  name: 'appointmentsForDoctor',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AppointmentsForDoctorFulfilled>) => ({
      ...state,
      appointments: [...state.appointments, ...action.payload.appointments],
      total: action.payload.total,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<AppointmentsForDoctorPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
    deleteAppointmentFulfilled: (state, action: PayloadAction<DeleteAppointmentFulfilled>) => ({
      ...state,
      appointments: state.appointments.filter((appointment) => appointment.appointmentID !== action.payload.id),
      entityStatus: FETCH_STATUS.FULFILLED,
    }),
    deleteAppointmentPending: (state, action: PayloadAction<DeleteAppointmentPending>) => ({ ...state, ...action.payload, entityStatus: FETCH_STATUS.LOADING }),
    deleteAppointmentFailed: (state) => ({ ...state, entityStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;
export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
