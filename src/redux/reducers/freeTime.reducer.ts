import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FreeTimeResponse } from 'resources/appointments/appointments.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { FreeTimeState } from './reducers.types';
import { FreeTimePending } from '../actions.types';

const initialState = {
  freeTime: [],
  status: FETCH_STATUS.IDLE,
} as FreeTimeState;

export const freeDoctorTimeSlice = createSlice({
  name: 'freeDoctorTime',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<FreeTimeResponse>) => ({ ...state, freeTime: action.payload, status: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<FreeTimePending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectFreeDoctorTime = (state: RootState) => state.freeDoctorTime;
export const freeDoctorTimeReducer = freeDoctorTimeSlice.reducer;
