/* eslint-disable camelcase */
import { RoleName, Status } from '../../redux/reducers/reducers.types';
import { ResolutionForDoctor } from '../resolutions/resolutions.types';

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
  roleName: RoleName
}

export interface AppointmentsForDoctor {
  appointments: Array<AppointmentForDoctor>,
  total: number
  roleName: RoleName
}

export interface DeleteAppointment {
  id: string;
}

export type FreeTimeResponse = Array<string>;

export interface AppointmentData {
  date: string;
  reason: string;
  note: string;
  doctorID: string;
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

export interface CardForDoctor {
  visitDate: string
  firstName: string
  lastName: string
  photo: string
  appointmentID: string
  status: string
  resolution: ResolutionForDoctor
}

export interface CardsForDoctor {
  appointments: Array<CardForDoctor>,
  roleName: RoleName
}

export interface CardsForDoctorResponse {
  cards: Array<CardForDoctor>,
  total: number
  status: Status
}
