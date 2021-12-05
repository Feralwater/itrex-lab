export const PATH = {
  PATIENTS: '/patients',
  RESOLUTIONS: '/resolutions',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  APPOINTMENTS: '/appointments',
  CREATE_APPOINTMENT: '/create-an-appointment',
  PROFILE: '/profile',
  MY_RESOLUTIONS: '/my-resolutions',
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
  [ROLES.DOCTOR]: PATH.PATIENTS,
  [ROLES.PATIENT]: PATH.APPOINTMENTS,
  [ROLES.PUBLIC]: PATH.SIGN_IN,
};

export const ROLES_ACCESS = {
  [ROLES.DOCTOR]: new Set([PATH.PATIENTS, PATH.RESOLUTIONS]),
  [ROLES.PATIENT]: new Set([
    PATH.APPOINTMENTS,
    PATH.CREATE_APPOINTMENT,
    PATH.PROFILE,
    PATH.MY_RESOLUTIONS,
  ]),
  [ROLES.PUBLIC]: new Set([PATH.SIGN_IN, PATH.SIGN_UP, PATH.RESTORE_PASSWORD, PATH.SEND_EMAIL]),
};
