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
      .addCase(appointmentsForDoctor.fulfilled, (state, { payload }) => ({
        ...state, appointments: payload.appointments, total: payload.total, responseStatus: 'fulfilled',
      }));
    builder
      .addCase(deleteAppointment.fulfilled, (state, { payload }) => ({
        ...state,
        appointments: state.appointments.filter((appointment) => appointment.id !== payload.id),
        total: state.total - 1,
        responseStatus: 'fulfilled',
      }));
    builder
      .addCase(appointmentsForDoctor.pending, (state) => ({ ...state, responseStatus: 'loading' }));
    builder
      .addCase(appointmentsForDoctor.failed, (state) => ({ ...state, responseStatus: 'failed' }));
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;

export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
