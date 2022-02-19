import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { AppointmentsForDoctorState } from './reducers.types';
import {
  AppointmentsForDoctorFulfilled,
  AppointmentsForDoctorPending,
  DeleteAppointmentPending, EditResolutionFulfilled, EditResolutionPending, ResolutionFulfilled, ResolutionPending,
} from '../actions.types';

const initialState = {
  appointments: [],
  total: 0,
  isMore: false,
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
      isMore: action.payload.total > action.payload.appointments.length,
      total: action.payload.total,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<AppointmentsForDoctorPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
    deleteAppointmentFulfilled: (state, action: PayloadAction<string>) => ({
      ...state,
      appointments: state.appointments.filter((appointment) => appointment.appointmentID !== action.payload),
      entityStatus: FETCH_STATUS.FULFILLED,
    }),
    deleteAppointmentPending: (state, action: PayloadAction<DeleteAppointmentPending>) => ({ ...state, ...action.payload, entityStatus: FETCH_STATUS.LOADING }),
    deleteAppointmentFailed: (state) => ({ ...state, entityStatus: FETCH_STATUS.FAILED }),
    createResolutionFulfilled: (state, action: PayloadAction<ResolutionFulfilled>) => ({
      ...state,
      appointmentID: action.payload.appointment_id,
      nextAppointmentDate: action.payload.next_appointment_date,
      resolution: action.payload.resolution,
      resolutionID: action.payload.id,
      total: state.total + 1,
      status: FETCH_STATUS.FULFILLED,
    }),
    createResolutionPending: (state, action: PayloadAction<ResolutionPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    createResolutionFailed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
    editResolutionFulfilled: (state, action: PayloadAction<EditResolutionFulfilled>) => ({
      ...state,
      status: FETCH_STATUS.FULFILLED,
    }),
    editResolutionPending: (state, action: PayloadAction<EditResolutionPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    editResolutionFailed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;
export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
