import { SignInData, SignUpData, SignUpInResponseType } from '../../resources/auth/auth.types';
import {
  AppointmentsForDoctor,
  AppointmentsForPatient, DeleteAppointment,
  NewAppointmentResponse,
} from '../../resources/appointments/appointments.types';

export type LoginPendingType = SignInData;
export type LoginFulfilledType = SignUpInResponseType;

export type RegistrationPendingType = SignUpData;
export type RegistrationFulfilledType = SignUpInResponseType;

export type AppointmentPendingType = {
  date: string
  reason: string
  note: string
  doctorID: string
};

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

export type AppointmentFulfilledType = NewAppointmentResponse;

export type AppointmentsForPatientFulfilled = AppointmentsForPatient;

export type AppointmentsForDoctorFulfilled = AppointmentsForDoctor;

export type DeleteAppointmentFulfilled = DeleteAppointment;
