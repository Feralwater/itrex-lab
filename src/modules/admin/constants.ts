import { PATH } from 'routes/constants';
import { dictionary } from 'pages';
import { AdminPatientsPage } from 'modules/admin/AdminPatientsPage';

export const adminRoutes = [
  {
    path: PATH.ADMIN_PATIENTS,
    element: AdminPatientsPage,
  },
  {
    path: PATH.ADMIN_DOCTORS,
    element: AdminPatientsPage,
  },
];

export const adminTabs = [
  {
    path: PATH.ADMIN_PATIENTS,
    text: dictionary.adminPage.buttonPatients,
  },
  {
    path: PATH.ADMIN_DOCTORS,
    text: dictionary.adminPage.buttonDoctors,
  },
];

export const userPerPage = 6;
