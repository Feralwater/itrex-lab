import { RoleName } from '../../redux/reducers/reducers.types';
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
  note?: string;
  role: RoleName;
  resolution?: ResolutionForDoctor;
}
