import { createSlice } from '@reduxjs/toolkit';
import { AppointmentStateType } from './reducers.types';
import appointment from '../actions/appointment.actions';

const initialState: AppointmentStateType = {
  id: '',
  patient_id: '',
  doctor_id: '',
  visit_date: '',
  reason: '',
  note: '',
  status: '',
  responseStatus: 'idle',
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointment.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.patient_id = payload.patient_id;
        state.doctor_id = payload.doctor_id;
        state.visit_date = payload.visit_date;
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
