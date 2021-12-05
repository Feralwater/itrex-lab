import { Patient, ResolutionsResponse } from '../resolutions/resolutions.types';

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
  doctorsResolutions?: [
    {
      id: string,
      appointment_id: string,
      next_appointment_date: string,
      resolution: string,
      visit_date: string,
      patient: Patient, }
    ],
}

export interface DeleteAppointment {
  id: string;
}

export type FreeTimeResponse = Array<string>

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
