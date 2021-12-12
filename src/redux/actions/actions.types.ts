import { SignInData, SignUpData, SignUpInResponse } from '../../resources/auth/auth.types';
import {
  AppointmentsForDoctor,
  AppointmentsForPatient, DeleteAppointment,
  NewAppointmentResponse,
} from '../../resources/appointments/appointments.types';
import { ResolutionData, ResolutionResponse } from '../../resources/resolutions/resolutions.types';
import { EditProfileData } from '../../pages/Profile/EditProfile.types';

export type LoginPending = SignInData;
export type LoginFulfilled = SignUpInResponse;

export type RegistrationPending = SignUpData;
export type RegistrationFulfilled = SignUpInResponse;

export type ResolutionPending = ResolutionData;
export type ResolutionFulfilled = ResolutionResponse;

export type ResolutionsPending = AppointmentsForDoctorPending;

export interface AppointmentPending {
  date: string
  reason: string
  note: string
  doctorID: string
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

export type AppointmentFulfilled = NewAppointmentResponse;

export type AppointmentsForPatientFulfilled = AppointmentsForPatient;

export type AppointmentsForDoctorFulfilled = AppointmentsForDoctor;

export type DeleteAppointmentFulfilled = DeleteAppointment;

export type EditProfilePending = EditProfileData;
