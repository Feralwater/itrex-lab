import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionForDoctor, ResolutionResponse } from 'resources/resolutions/resolutions.types';
import { UpdateStatusData, UpdateStatusFulfilled } from 'resources/appointments/appointments.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { AppointmentsForDoctorState } from './reducers.types';
import {
  AppointmentForDoctorFulfilled,
  AppointmentsForDoctorFulfilled,
  AppointmentsForDoctorPending,
  DeleteAppointmentPending, EditResolutionFulfilled, EditResolutionPending, ResolutionFulfilled, ResolutionPending,
} from '../actions.types';

const initialState = {
  appointments: [],
  total: 0,
  isMore: false,
  status: FETCH_STATUS.IDLE,
  deleteAppointmentStatus: FETCH_STATUS.IDLE,
  createResolutionStatus: FETCH_STATUS.IDLE,
  editResolutionStatus: FETCH_STATUS.IDLE,
  changeStatusStatus: FETCH_STATUS.IDLE,
} as AppointmentsForDoctorState;

function createResolution(appointment: AppointmentForDoctorFulfilled, newResolution:ResolutionResponse): ResolutionForDoctor | undefined {
  return {
    id: newResolution.id,
    appointment_id: appointment.appointmentID,
    next_appointment_date: newResolution.next_appointment_date,
    resolution: newResolution.resolution,
    visit_date: appointment.visitDate,
  };
}

export const appointmentsForDoctorSlice = createSlice({
  name: 'appointmentsForDoctor',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<AppointmentsForDoctorFulfilled>) => ({
      ...state,
      appointments: [...state.appointments, ...action.payload.appointments],
      isMore: action.payload.total > action.payload.appointments.length,
      total: action.payload.total,
      status: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<AppointmentsForDoctorPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
    deleteAppointmentFulfilled: (state, action: PayloadAction<string>) => ({
      ...state,
      appointments: state.appointments.filter((appointment) => appointment.appointmentID !== action.payload),
      deleteAppointmentStatus: FETCH_STATUS.FULFILLED,
    }),
    deleteAppointmentPending: (state, action: PayloadAction<DeleteAppointmentPending>) => ({ ...state, ...action.payload, deleteAppointmentStatus: FETCH_STATUS.LOADING }),
    deleteAppointmentFailed: (state) => ({ ...state, deleteAppointmentStatus: FETCH_STATUS.FAILED }),
    createResolutionFulfilled: (state, action: PayloadAction<ResolutionFulfilled>) => ({
      ...state,
      appointments: state.appointments.map((appointment) => {
        if (action.payload.appointment_id === appointment.appointmentID) {
          const resolution = createResolution(appointment, action.payload);
          return { ...appointment, resolution };
        }
        return appointment;
      }),
      createResolutionStatus: FETCH_STATUS.FULFILLED,
    }),
    createResolutionPending: (state, action: PayloadAction<ResolutionPending>) => (
      { ...state, ...action.payload, createResolutionStatus: FETCH_STATUS.LOADING }),
    createResolutionFailed: (state) => ({ ...state, createResolutionStatus: FETCH_STATUS.FAILED }),
    editResolutionFulfilled: (state, action: PayloadAction<EditResolutionFulfilled>) => {
      const editedAppointments = state.appointments.map((appointment) => {
        if (appointment.resolution?.id === action.payload.resolutionID) {
          return {
            ...appointment,
            resolution: {
              ...appointment.resolution,
              resolution: action.payload.resolution,
            },
          };
        }
        return { ...appointment };
      });
      return ({ ...state, appointments: editedAppointments, editResolutionStatus: FETCH_STATUS.FULFILLED });
    },
    editResolutionPending: (state, action: PayloadAction<EditResolutionPending>) => ({ ...state, ...action.payload, editResolutionStatus: FETCH_STATUS.LOADING }),
    editResolutionFailed: (state) => ({ ...state, editResolutionStatus: FETCH_STATUS.FAILED }),
    updateStatusFulfilled: (state, action:PayloadAction<UpdateStatusFulfilled>) => {
      const editedAppointments = state.appointments.map((appointment) => {
        if (appointment.appointmentID === action.payload.editedAppointmentID) {
          return {
            ...appointment,
            appointmentStatus: action.payload.editedStatus,
          };
        }
        return { ...appointment };
      });
      return ({ ...state, appointments: editedAppointments, changeStatusStatus: FETCH_STATUS.FULFILLED });
    },
    updateStatusPending: (state, action:PayloadAction<UpdateStatusData>) => ({ ...state, newStatus: action.payload.status, changeStatusStatus: FETCH_STATUS.LOADING }),
    updateStatusFailed: (state) => ({ ...state, changeStatusStatus: FETCH_STATUS.FAILED }),
    clearState: (state) => ({ ...state, appointments: [] }),
  },
});

export const selectAppointmentsForDoctor = (state: RootState) => state.appointmentsForDoctor;
export const appointmentsForDoctorReducer = appointmentsForDoctorSlice.reducer;
