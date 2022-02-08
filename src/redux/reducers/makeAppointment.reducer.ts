import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from './reducers.types';
import { FETCH_STATUS } from './constants';
import { RootState } from '../store';
import { AppointmentPending, MakeAppointmentFulfilled } from '../actions.types';

export const makeAppointmentSlice = createSlice({
  name: 'makeAppointment',
  initialState: { responseStatus: FETCH_STATUS.IDLE } as { responseStatus: Status },
  reducers: {
    fulfilled: (state, action: PayloadAction<MakeAppointmentFulfilled>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<AppointmentPending>) => ({ ...state, ...action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectMakeAppointment = (state: RootState) => state.makeAppointment;
export const makeAppointmentReducer = makeAppointmentSlice.reducer;
