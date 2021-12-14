import { createSlice } from '@reduxjs/toolkit';
import { ROLES } from '../../routes/constants';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { freeDoctorTime } from '../actions';
import { FreeTimeState } from './reducers.types';

const initialState = {
  freeTime: [],
  status: FETCH_STATUS.IDLE,
} as FreeTimeState;

export const freeDoctorTimeSlice = createSlice({
  name: 'freeDoctorTime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(freeDoctorTime.fulfilled, (state, { payload }) => ({
        ...state,
        freeTime: payload,
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(freeDoctorTime.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(freeDoctorTime.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: ROLES.PUBLIC }));
  },
});

export const selectFreeDoctorTime = (state: RootState) => state.freeDoctorTime;

export const freeDoctorTimeReducer = freeDoctorTimeSlice.reducer;
