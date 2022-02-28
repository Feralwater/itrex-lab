import { AppointmentForPatient } from 'resources/appointments/appointments.types';
import { ResolutionsForPatientResponse, ResolutionsResponse } from 'resources/resolutions/resolutions.types';
import { AppointmentForDoctorFulfilled } from '../actions.types';

export type Status = 'idle' | 'loading' | 'failed' | 'fulfilled';
export type RoleName = 'Doctor' | 'Patient' | 'Public' | 'Admin';

interface Request {
  status: Status;
}

export interface LoginState extends Request {
  accessToken: string;
  refreshToken?: string;
}

export interface ProfileState extends Request {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  roleName?: RoleName;
}

export interface RegistrationState extends Request {
  accessToken: string;
  refreshToken?: string;
}

export interface RestoreState {
  password: string;
}

export interface DeleteAppointmentState {
  deleteAppointmentID: string;
  status: Status;
}

export interface NotificationState {
  isSuccess: boolean;
  successMessageText: string;
  errorMessageText: string;
}

export interface ResolutionState {
  appointmentID: string;
  nextAppointmentDate: string;
  resolution: string;
  resolutionID: string;
  total: number;
  status: Status;
}

export interface EditResolutionState {
  resolutionID: string;
  status: Status;
}

export interface ResolutionsState extends ResolutionsResponse {
  status: Status;
}

export interface ResolutionsForPatientState extends ResolutionsForPatientResponse {
  status: Status;
}

export interface AppointmentsForPatientState {
  appointments: Array<AppointmentForPatient>,
  total: number
  isMore: boolean,
  responseStatus: Status
}

export interface Occupation {
  occupationName: string;
  occupationID: string;
}

export interface OccupationState {
  occupations: Array<Occupation>;
  status: Status;
}

export interface DoctorByID {
  firstName: string,
  lastName: string,
  doctorID: string
}

export interface DoctorsByIDState {
  doctors: Array<DoctorByID>;
  status: Status;
}

export interface FreeTimeState {
  freeTime: Array<string>;
  status: Status;
}

export interface ChangePasswordState {
  id: string,
  first_name: string,
  last_name: string,
  password: string,
  photo: string,
  role_id: string
  status: Status;
}

export interface AppointmentsForDoctorState {
  appointments: Array<AppointmentForDoctorFulfilled>,
  total: number,
  isMore: boolean,
  status: Status,
  entityStatus: Status,
}

export interface AllPatientsState{
  userID: string
  firsName: string
  lastName: string
  photo: string
  roleName: RoleName
  specialization_name?: string
}

export interface AllUsersState {
  users: AllPatientsState[];
  total: number;
  status: Status;
}
