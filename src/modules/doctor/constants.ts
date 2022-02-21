import { PATH, ROLES } from 'routes/constants';
import { ProfileContainer, ResolutionsForDoctorContainer } from 'pages';
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
    element: ResolutionsForDoctorContainer,
  },
  {
    path: PATH.profile(ROLES.DOCTOR),
    element: ProfileContainer,
  },
];
