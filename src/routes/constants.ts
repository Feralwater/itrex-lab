export const PATH = {
  DOCTOR_APPOINTMENTS: '/doctor/appointments',
  DOCTOR_RESOLUTIONS: '/doctor/resolutions',
  PATIENT_APPOINTMENTS: '/patient/appointments',
  PATIENT_RESOLUTIONS: '/patient/resolutions',
  CREATE_APPOINTMENT: '/create-appointment',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
};

export const ROLES = {
  DOCTOR: 'Doctor',
  PATIENT: 'Patient',
  PUBLIC: 'Public',
} as const;

export const ROLES_API = {
  Doctor: ROLES.DOCTOR,
  Patient: ROLES.PATIENT,
  Public: ROLES.PUBLIC,
  '': ROLES.PUBLIC,
};

export const DEFAULT_PATH = {
  [ROLES.DOCTOR]: PATH.DOCTOR_APPOINTMENTS,
  [ROLES.PATIENT]: PATH.PATIENT_APPOINTMENTS,
  [ROLES.PUBLIC]: PATH.SIGN_IN,
};

export const ROLES_ACCESS = {
  [ROLES.DOCTOR]: new Set([PATH.DOCTOR_APPOINTMENTS,
    PATH.DOCTOR_RESOLUTIONS,
    PATH.PROFILE,
    PATH.PROFILE_EDIT,
  ]),
  [ROLES.PATIENT]: new Set([
    PATH.PATIENT_APPOINTMENTS,
    PATH.CREATE_APPOINTMENT,
    PATH.PROFILE,
    PATH.PATIENT_RESOLUTIONS,
  ]),
  [ROLES.PUBLIC]: new Set([PATH.SIGN_IN, PATH.SIGN_UP, PATH.RESTORE_PASSWORD, PATH.SEND_EMAIL]),
};
