/* eslint-disable camelcase */
import { RoleName } from 'redux/reducers/reducers.types';

export interface Appointment {
  id: 'string',
  reason: 'string',
  note: 'string',
  patient_id: 'string',
  doctor_id: 'string',
  visit_date: 'string',
  status: 'string',
}

export interface AppointmentForPatient extends Appointment {
  doctor: {
    last_name: 'string',
    first_name: 'string',
    id: 'string',
    photo: 'string',
    specialization_name: 'string',
  };
}

export interface AppointmentForDoctor extends Appointment {
  patient: {
    last_name: 'string',
    first_name: 'string',
    id: 'string',
    photo: 'string',
  };
}

export interface AppointmentsForPatient {
  appointments: Array<AppointmentForPatient>,
  total: number
}

export interface AppointmentsForDoctor {
  appointments: Array<AppointmentForDoctor>,
  total: number
  roleName: RoleName
}

export type FreeTimeResponse = Array<string>;

export interface AppointmentData {
  date: string;
  reason: string;
  note: string;
  doctorID: string;
}

export interface UpdateStatus {
  status: string
}

export interface NewAppointmentResponse {
  id: 'string',
  patient_id: 'string',
  doctor_id: 'string',
  visit_date: 'string',
  reason: 'string',
  note: 'string',
  status: 'string'
}
