export const PATH = {
  MY_PATIENTS: '/my-AppointmentsForDoctorContainer',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  MY_APPOINTMENTS: '/my-appointments',
  CREATE_APPOINTMENT: '/create-an-appointment',
};

export const ROLES = {
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT',
  PUBLIC: 'PUBLIC',
} as const;

export const ROLES_API = {
  Doctor: ROLES.DOCTOR,
  Patient: ROLES.PATIENT,
  '': ROLES.PUBLIC,
};

export const DEFAULT_PATH = {
  [ROLES.DOCTOR]: PATH.MY_PATIENTS,
  [ROLES.PATIENT]: PATH.MY_APPOINTMENTS,
  [ROLES.PUBLIC]: PATH.SIGN_IN,
};

export const ROLES_ACCESS = {
  [ROLES.DOCTOR]: new Set([PATH.MY_PATIENTS]),
  [ROLES.PATIENT]: new Set([
    PATH.MY_APPOINTMENTS,
    PATH.CREATE_APPOINTMENT,
  ]),
  [ROLES.PUBLIC]: new Set([PATH.SIGN_IN, PATH.SIGN_UP, PATH.RESTORE_PASSWORD, PATH.SEND_EMAIL]),
};
