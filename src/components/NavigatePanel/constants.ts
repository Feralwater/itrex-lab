import { PATH, ROLES } from 'routes/constants';
import { dictionary } from 'pages';

export const filterOptionsForPatient = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Upcoming',
    value: 'Upcoming',
  },
  {
    label: 'Outdated',
    value: 'Outdate',
  },
];

export const filterOptionsForDoctor = [
  {
    label: 'None',
    value: 'None',
  },
  {
    label: 'Date',
    value: 'dateSort',
  },
  {
    label: 'Name',
    value: 'firstNameSort',
  },
];

export const patientTabs = [
  {
    path: PATH.profile(ROLES.PATIENT),
    text: dictionary.patientPage.buttonProfile,
  },
  {
    path: PATH.PATIENT_APPOINTMENTS,
    text: dictionary.patientPage.buttonAppointments,
  },
  {
    path: PATH.PATIENT_RESOLUTIONS,
    text: dictionary.patientPage.buttonResolutions,
  },
];

export const doctorTabs = [
  {
    path: PATH.DOCTOR_APPOINTMENTS,
    text: dictionary.doctorPage.buttonAppointment,
  },
  {
    path: PATH.DOCTOR_RESOLUTIONS,
    text: dictionary.doctorPage.buttonResolutions,
  },
];
