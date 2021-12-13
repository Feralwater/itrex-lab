import { createSlice } from '@reduxjs/toolkit';
import { AppointmentsForDoctorState } from './reducers.types';
import { appointmentsForDoctor, deleteAppointment } from '../actions';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  appointments: [],
  total: 0,
  responseStatus: FETCH_STATUS.IDLE,
} as AppointmentsForDoctorState;

export const appointmentsForDoctorSlice = createSlice({
  name: 'appointmentsForDoctor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointmentsForDoctor.fulfilled, (state, { payload }) => ({
        ...state, appointments: payload.appointments, total: payload.total, responseStatus: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(deleteAppointment.fulfilled, (state, { payload }) => ({
        ...state,
        appointments: state.appointments.filter((appointment) => appointment.id !== payload.id),
        total: state.total - 1,
        responseStatus: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(appointmentsForDoctor.pending, (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }));
    builder
      .addCase(appointmentsForDoctor.failed, (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }));
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;

export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
