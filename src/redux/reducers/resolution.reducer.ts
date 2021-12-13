import { createSlice } from '@reduxjs/toolkit';
import { ResolutionState } from './reducers.types';
import { resolution } from '../actions';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  appointmentID: '',
  nextAppointmentDate: '',
  resolution: '',
  resolutionID: '',
  total: 0,
  status: FETCH_STATUS.IDLE,
} as ResolutionState;

export const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolution.fulfilled, (state, { payload }) => ({
        ...state,
        appointmentID: payload.appointment_id,
        nextAppointmentDate: payload.next_appointment_date,
        resolution: payload.resolution,
        resolutionID: payload.id,
        total: state.total + 1,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(resolution.pending, (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }));
    builder
      .addCase(resolution.failed, (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }));
  },
});

export const selectResolution = (state: RootState) => state.resolution;

export const resolutionReducer = resolutionSlice.reducer;
