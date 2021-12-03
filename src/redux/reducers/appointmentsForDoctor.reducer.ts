import { createSlice } from '@reduxjs/toolkit';
import { AppointmentsForDoctorState } from './reducers.types';
import appointmentsForDoctor from '../actions/appointmentsForDoctors.actions';

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
      .addCase(appointmentsForDoctor.pending, (state) => {
        state.responseStatus = 'loading';
      });
    builder
      .addCase(appointmentsForDoctor.failed, (state) => {
        state.responseStatus = 'failed';
      });
  },
});

export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
