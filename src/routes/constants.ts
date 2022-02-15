import { RoleName } from 'redux/reducers/reducers.types';

export const PATH = {
  DEFAULT: '/',
  DOCTOR_RESOLUTIONS: '/doctor/resolutions/:currentPageNumber',
  DOCTOR_APPOINTMENTS: '/doctor/appointments',
  PATIENT_APPOINTMENTS: '/patient/appointments',
  PATIENT_RESOLUTIONS: '/patient/resolutions',
  CREATE_APPOINTMENT: '/create-appointment',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  profile: (roleName?:RoleName) => `/${roleName?.toLocaleLowerCase()}/profile`,
};

export enum ROLES {
  DOCTOR = 'Doctor',
  PATIENT = 'Patient',
}

export const initialResolutionsPageNumber = 1;
