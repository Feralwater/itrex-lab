import { PATH } from 'routes/constants';
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
    path: PATH.PATIENT_RESOLUTIONS,
    element: ResolutionsForDoctorContainer,
  },
  {
    path: PATH.PROFILE,
    element: ProfileContainer,
  },
];
