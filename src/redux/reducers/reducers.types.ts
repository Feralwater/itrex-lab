import { ROLES } from '../../routes/constants';

export type Status = 'idle' | 'loading' | 'failed' | 'fulfilled'
export type RoleName = keyof typeof ROLES | ''

interface Request {
  status: Status;
}

export interface LoginStateType extends Request {
  accessToken: string;
  refreshToken?: string;
}

export interface ProfileStateType extends Request {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  roleName: RoleName;
  isAuth: boolean;
}

export interface AppointmentStateType {
  id: string;
  patient_id: string;
  doctor_id: string;
  visit_date: string;
  reason: string;
  note: string;
  status: string;
  responseStatus: Status;
}

export interface RegistrationStateType extends Request {
  accessToken: string;
  refreshToken?: string;
}

export interface RestoreState {
  password: string;
}
