import { initialResolutionsPageNumber, PATH, ROLES } from 'routes/constants';
import { dictionary } from 'pages';

export const searchOptions = [
  {
    label: 'Date',
    value: 'Date',
  },
  {
    label: 'Name',
    value: 'Name',
  },
];

export const optionsForSearchSelect = searchOptions.map((option) => ({
  label: option.label,
  value: option.value,
}));

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
    path: `${PATH.DOCTOR_RESOLUTIONS.replaceAll(':currentPageNumber', '')}${initialResolutionsPageNumber}`,
    text: dictionary.doctorPage.buttonResolutions,
  },
];
