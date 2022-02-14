import { PATH } from 'routes/constants';
import { MakeAppointmentFormContainer } from 'components';
import { AppointmentsForPatientContainer } from 'modules/patient/AppointmentsForPatientContainer';
import { ProfileContainer, ResolutionsForPatientContainer } from 'pages';

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
    element: ResolutionsForPatientContainer,
  },
  {
    path: PATH.CREATE_APPOINTMENT,
    element: MakeAppointmentFormContainer,
  },
  {
    path: PATH.PROFILE,
    element: ProfileContainer,
  },
];
