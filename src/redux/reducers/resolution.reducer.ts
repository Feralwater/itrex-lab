import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { ResolutionFulfilled, ResolutionPending } from '../actions.types';

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
  reducers: {
    fulfilled: (state, action: PayloadAction<ResolutionFulfilled>) => ({
      ...state,
      appointmentID: action.payload.appointment_id,
      nextAppointmentDate: action.payload.next_appointment_date,
      resolution: action.payload.resolution,
      resolutionID: action.payload.id,
      total: state.total + 1,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<ResolutionPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectResolution = (state: RootState) => state.resolution;
export const resolutionReducer = resolutionSlice.reducer;
