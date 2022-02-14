import { RoleName } from 'redux/reducers/reducers.types';

export const PATH = {
  DOCTOR_RESOLUTIONS: '/doctor/resolutions',
  APPOINTMENTS: (roleName:RoleName) => `/${roleName}/appointments`,
  PATIENT_RESOLUTIONS: '/patient/resolutions',
  CREATE_APPOINTMENT: '/create-appointment',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
};

export enum ROLES {
  DOCTOR = 'Doctor',
  PATIENT = 'Patient',
}
