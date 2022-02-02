/* eslint-disable camelcase */
import { SignInData, SignUpData, SignUpInResponse } from '../../resources/auth/auth.types';
import {
  AppointmentsForPatient,
  DeleteAppointment,
  NewAppointmentResponse,
} from '../../resources/appointments/appointments.types';
import {
  EditResolutionData,
  EditResolutionResponse,
  ResolutionData, ResolutionForDoctor,
  ResolutionResponse, ResolutionsForPatientResponse,
} from '../../resources/resolutions/resolutions.types';
import { Status } from '../reducers/reducers.types';

export type LoginPending = SignInData;
export type LoginFulfilled = SignUpInResponse;

export type RegistrationPending = SignUpData;
export type RegistrationFulfilled = SignUpInResponse;

export type ResolutionPending = ResolutionData;
export type EditResolutionPending = EditResolutionData;
export type ResolutionFulfilled = ResolutionResponse;
export type EditResolutionFulfilled = EditResolutionResponse;
export type ResolutionsForPatientFulfilled = ResolutionsForPatientResponse;
export type ResolutionsPending = AppointmentsForDoctorPending;

export interface AppointmentPending {
  date: string;
  reason: string;
  note: string;
  doctorID: string;
}

export interface AppointmentsForPatientPending {
  offset: number;
  limit: number;
}

export interface AppointmentsForDoctorPending {
  offset: number;
  limit: number;
}

export interface DeleteAppointmentPending {
  id: string;
}

export interface ChangePasswordPending {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordFulfilled {
  id: string,
  first_name: string,
  last_name: string,
  password: string,
  photo: string,
  role_id: string
}

export type MakeAppointmentFulfilled = NewAppointmentResponse;

export type AppointmentsForPatientFulfilled = AppointmentsForPatient;

export interface AppointmentForDoctorFulfilled{
  visitDate: string
  firstName: string
  lastName: string
  photo: string
  appointmentID: string
  status: string
  resolution: ResolutionForDoctor
}

export interface AppointmentsForDoctorFulfilled {
  appointments: Array<AppointmentForDoctorFulfilled>
  total: number
  status: Status
}

export type DeleteAppointmentFulfilled = DeleteAppointment;

export interface FreeTimePending {
  date: string | null;
  doctorID: string;
}
