import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { AppointmentsForDoctorState } from './reducers.types';
import {
  AppointmentsForDoctorFulfilled,
  AppointmentsForDoctorPending,
  DeleteAppointmentPending,
} from '../actions.types';

const initialState = {
  appointments: [],
  total: 0,
  isMore: false,
  responseStatus: FETCH_STATUS.IDLE,
  entityStatus: FETCH_STATUS.IDLE,
} as AppointmentsForDoctorState;

export const appointmentsForDoctorSlice = createSlice({
  name: 'appointmentsForDoctor',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AppointmentsForDoctorFulfilled>) => ({
      ...state,
      appointments: [...state.appointments, ...action.payload.appointments],
      isMore: action.payload.total > action.payload.appointments.length,
      total: action.payload.total,
      responseStatus: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<AppointmentsForDoctorPending>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
    deleteAppointmentFulfilled: (state, action: PayloadAction<string>) => ({
      ...state,
      appointments: state.appointments.filter((appointment) => appointment.appointmentID !== action.payload),
      entityStatus: FETCH_STATUS.FULFILLED,
    }),
    deleteAppointmentPending: (state, action: PayloadAction<DeleteAppointmentPending>) => ({ ...state, ...action.payload, entityStatus: FETCH_STATUS.LOADING }),
    deleteAppointmentFailed: (state) => ({ ...state, entityStatus: FETCH_STATUS.FAILED }),
    clearState: (state) => ({ ...state, appointments: [] }),
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;
export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
