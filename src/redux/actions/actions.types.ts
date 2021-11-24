import { SignUpInResponseType } from '../../resources/auth/auth.types';
import { NewAppointmentResponseType } from '../../resources/appointments/appointments.types';

export type LoginPendingType = { userName: string; password: string };
export type LoginFulfilledType = SignUpInResponseType;

export type AppointmentPendingType = {
  date: string
  reason: string
  note: string
  doctorID: string
};
export type AppointmentFulfilledType = NewAppointmentResponseType;
