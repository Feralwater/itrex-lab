import { Patient } from '../../../resources/resolutions/resolutions.types';

export interface AppointmentCardProps {
  specialization?: string;
  appointmentID: string
  firstName: string;
  lastName: string;
  avatar: string;
  status: string;
  time: string;
  reason?: string;
  note: string;
  role: string;
  doctorsResolutions?:[
    {
      id: string,
      appointment_id: string,
      next_appointment_date: string,
      resolution: string,
      visit_date: string,
      patient: Patient, }
    ],
}
