import { PATH } from 'routes/constants';
import { dictionary } from 'pages';
import { AdminMainPage } from 'modules/admin/AdminMainPage';

export const adminRoutes = [
  {
    path: PATH.ADMIN_PATIENTS,
    element: AdminMainPage,
  },
  {
    path: PATH.ADMIN_DOCTORS,
    element: AdminMainPage,
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
