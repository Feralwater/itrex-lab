import { createSlice } from '@reduxjs/toolkit';
import { AppointmentState } from './reducers.types';
import appointment from '../actions/appointment.actions';

const initialState = {
  id: '',
  patientID: '',
  doctorID: '',
  visitDate: '',
  reason: '',
  note: '',
  status: '',
  responseStatus: 'idle',
} as AppointmentState;

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointment.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.patientID = payload.patient_id;
        state.doctorID = payload.doctor_id;
        state.visitDate = payload.visit_date;
        state.reason = payload.reason;
        state.note = payload.note;
        state.status = payload.status;
        state.responseStatus = 'fulfilled';
      });

    builder
      .addCase(appointment.pending, (state) => {
        state.responseStatus = 'loading';
      });
    builder
      .addCase(appointment.failed, (state) => {
        state.responseStatus = 'failed';
      });
  },
});

export const appointmentReducer = appointmentSlice.reducer;
