import { PATH } from 'routes/constants';
import { Profile } from 'modules/admin/Profile';

export const adminRoutes = [
  {
    path: PATH.ADMIN,
    element: Profile,
  },
];
