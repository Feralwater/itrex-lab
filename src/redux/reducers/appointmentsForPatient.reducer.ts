import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppointmentsForPatientState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { AppointmentsForPatientFulfilled, AppointmentsForPatientPending } from '../actions.types';

const initialState = {
  appointments: [],
  total: 0,
  responseStatus: FETCH_STATUS.IDLE,
} as AppointmentsForPatientState;

export const appointmentsForPatientSlice = createSlice({
  name: 'appointmentsForPatient',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AppointmentsForPatientFulfilled>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<AppointmentsForPatientPending>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectMakeAppointmentsForPatient = (state: RootState) => state.appointmentsForPatient;
export const appointmentsForPatientReducer = appointmentsForPatientSlice.reducer;
