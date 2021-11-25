import { SignInDataType, SignUpDataType, SignUpInResponseType } from '../../resources/auth/auth.types';
import { NewAppointmentResponseType } from '../../resources/appointments/appointments.types';

export type LoginPendingType = SignInDataType;
export type LoginFulfilledType = SignUpInResponseType;

export type RegistrationPendingType = SignUpDataType;
export type RegistrationFulfilledType = SignUpInResponseType;

export type AppointmentPendingType = {
  date: string
  reason: string
  note: string
  doctorID: string
};
export type AppointmentFulfilledType = NewAppointmentResponseType;
