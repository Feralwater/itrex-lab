import { createSlice } from '@reduxjs/toolkit';
import { AppointmentsForDoctorState } from './reducers.types';
import { appointmentsForDoctor, deleteAppointment } from '../actions';
import { RootState } from '../store';

const initialState = {
  appointments: [],
  total: 0,
  responseStatus: 'idle',
} as AppointmentsForDoctorState;

export const appointmentsForDoctorSlice = createSlice({
  name: 'appointmentsForDoctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentsForDoctor.fulfilled, (state, { payload }) => {
        state.appointments = payload.appointments;
        state.total = payload.total;
        state.responseStatus = 'fulfilled';
      });
    builder
      .addCase(deleteAppointment.fulfilled, (state, { payload }) => {
        state.appointments.filter((appointment) => appointment.id !== payload.id);
        state.total -= 1;
        state.responseStatus = 'fulfilled';
      });
    builder
      .addCase(appointmentsForDoctor.pending, (state) => {
        state.responseStatus = 'loading';
      });
    builder
      .addCase(appointmentsForDoctor.failed, (state) => {
        state.responseStatus = 'failed';
      });
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;

export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
