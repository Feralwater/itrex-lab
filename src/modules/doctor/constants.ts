import { PATH, ROLES } from 'routes/constants';
import { ProfileContainer, ResolutionsContainer } from 'pages';
import { AppointmentsForDoctorContainer } from 'modules/doctor/AppointmentsForDoctorContainer';

export const doctorsRoutes = [
  {
    path: PATH.DOCTOR_APPOINTMENTS,
    element: AppointmentsForDoctorContainer,
  },
  {
    path: PATH.DEFAULT,
    element: AppointmentsForDoctorContainer,
  },
  {
    path: PATH.DOCTOR_RESOLUTIONS,
    element: ResolutionsContainer,
  },
  {
    path: PATH.profile(ROLES.DOCTOR),
    element: ProfileContainer,
  },
];
