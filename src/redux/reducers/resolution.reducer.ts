import { createSlice } from '@reduxjs/toolkit';
import { ResolutionState } from './reducers.types';
import { resolution } from '../actions/resolution.actions';

const initialState = {
  appointmentID: '',
  nextAppointmentDate: '',
  resolution: '',
  resolutionID: '',
  status: 'idle',
} as ResolutionState;

export const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolution.fulfilled, (state, { payload }) => {
        state.appointmentID = payload.appointment_id;
        state.nextAppointmentDate = payload.next_appointment_date;
        state.resolution = payload.resolution;
        state.resolutionID = payload.id;
        state.status = 'fulfilled';
      });

    builder
      .addCase(resolution.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(resolution.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const resolutionReducer = resolutionSlice.reducer;
