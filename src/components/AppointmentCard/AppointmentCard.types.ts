import { ResolutionForDoctor } from '../../resources/resolutions/resolutions.types';

export interface AppointmentCardProps {
  specialization?: string;
  appointmentID: string;
  firstName: string;
  lastName: string;
  avatar: string;
  status: string;
  time: string;
  reason?: string;
  note: string;
  role: string;
  doctorsResolutions?: Array<ResolutionForDoctor>;
}
