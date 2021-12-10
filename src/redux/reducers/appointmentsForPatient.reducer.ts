import { createSlice } from '@reduxjs/toolkit';
import appointmentsForPatient from '../actions/appointmentsForPatient.actions';
import { AppointmentsForPatientState } from './reducers.types';
import { RootState } from '../store';

const initialState = {
  appointments: [],
  total: 0,
  responseStatus: 'idle',
} as AppointmentsForPatientState;

export const appointmentsForPatientSlice = createSlice({
  name: 'appointmentsForPatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentsForPatient.fulfilled, (state, { payload }) => {
        state.appointments = payload.appointments;
        state.total = payload.total;
        state.responseStatus = 'fulfilled';
      });

    builder
      .addCase(appointmentsForPatient.pending, (state) => {
        state.responseStatus = 'loading';
      });
    builder
      .addCase(appointmentsForPatient.failed, (state) => {
        state.responseStatus = 'failed';
      });
  },
});

export const selectAppointmentsForPatient = (state: RootState) => state.appointmentsForPatient;

export const appointmentsForPatientReducer = appointmentsForPatientSlice.reducer;
