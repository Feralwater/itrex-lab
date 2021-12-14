import { createSlice } from '@reduxjs/toolkit';
import { appointmentsForPatient } from '../actions';
import { AppointmentsForPatientState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  appointments: [],
  total: 0,
  responseStatus: FETCH_STATUS.IDLE,
} as AppointmentsForPatientState;

export const appointmentsForPatientSlice = createSlice({
  name: 'appointmentsForPatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentsForPatient.fulfilled, (state, { payload }) => ({
        ...state, appointments: payload.appointments, total: payload.total, responseStatus: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(appointmentsForPatient.pending, (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }));
    builder
      .addCase(appointmentsForPatient.failed, (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }));
  },
});

export const selectAppointmentsForPatient = (state: RootState) => state.appointmentsForPatient;

export const appointmentsForPatientReducer = appointmentsForPatientSlice.reducer;
