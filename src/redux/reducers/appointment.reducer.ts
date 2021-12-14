import { createSlice } from '@reduxjs/toolkit';
import { AppointmentState } from './reducers.types';
import { appointment } from '../actions';
import { FETCH_STATUS } from './constants';
import { RootState } from '../store';

const initialState = {
  id: '',
  patientID: '',
  doctorID: '',
  visitDate: '',
  reason: '',
  note: '',
  status: '',
  responseStatus: FETCH_STATUS.IDLE,
} as AppointmentState;

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appointment.fulfilled, (state, { payload }) => ({
        ...state,
        id: payload.id,
        patientID: payload.patient_id,
        doctorID: payload.doctor_id,
        visitDate: payload.visit_date,
        reason: payload.reason,
        note: payload.note,
        status: payload.status,
        responseStatus: FETCH_STATUS.FULFILLED,
      }));

    builder
      .addCase(appointment.pending, (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }));
    builder
      .addCase(appointment.failed, (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }));
  },
});

export const selectAppointment = (state: RootState) => state.appointments;

export const appointmentReducer = appointmentSlice.reducer;
