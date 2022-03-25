import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { AppointmentsForPatientState } from './reducers.types';
import { FETCH_STATUS } from './constants';
import { AppointmentsForPatientFulfilled, AppointmentsForPatientPending } from '../actions.types';

const initialState = {
  appointments: [],
  total: 0,
  isMore: false,
  responseStatus: FETCH_STATUS.IDLE,
} as AppointmentsForPatientState;

export const appointmentsForPatientSlice = createSlice({
  name: 'appointmentsForPatient',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AppointmentsForPatientFulfilled>) => ({
      ...state,
      appointments: [...state.appointments, ...action.payload.appointments],
      isMore: action.payload.total > action.payload.appointments.length,
      total: action.payload.total,
      responseStatus: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<AppointmentsForPatientPending>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
    clearState: (state) => ({ ...state, appointments: [] }),
  },
});

export const selectAppointmentsForPatient = (state: RootState) => state.appointmentsForPatient;
export const appointmentsForPatientReducer = appointmentsForPatientSlice.reducer;
