import { createSlice } from '@reduxjs/toolkit';
import { ResolutionState } from './reducers.types';
import { resolution } from '../actions';
import { RootState } from '../store';

const initialState = {
  appointmentID: '',
  nextAppointmentDate: '',
  resolution: '',
  resolutionID: '',
  total: 0,
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
        state.total += 1;
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

export const selectResolution = (state: RootState) => state.resolution;

export const resolutionReducer = resolutionSlice.reducer;
