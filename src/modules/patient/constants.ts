import { PATH, ROLES } from 'routes/constants';
import { MakeAppointmentFormContainer } from 'components';
import { AppointmentsForPatientContainer } from 'modules/patient/AppointmentsForPatientContainer';
import { ProfileContainer, ResolutionsContainer } from 'pages';

export const patientsRoutes = [
  {
    path: PATH.DEFAULT,
    element: AppointmentsForPatientContainer,
  },
  {
    path: PATH.PATIENT_APPOINTMENTS,
    element: AppointmentsForPatientContainer,
  },
  {
    path: PATH.PATIENT_RESOLUTIONS,
    element: ResolutionsContainer,
  },
  {
    path: PATH.CREATE_APPOINTMENT,
    element: MakeAppointmentFormContainer,
  },
  {
    path: PATH.profile(ROLES.PATIENT),
    element: ProfileContainer,
  },
];
