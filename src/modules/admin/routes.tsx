import { Route } from 'react-router-dom';
import { PrivateRoute } from 'routes';
import { ROLES } from 'routes/constants';
import { LayoutPrivate } from 'components';
import React from 'react';
import { adminRoutes } from 'modules/admin/constants';

export const getAdminRoutes = () => adminRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute roleName={ROLES.ADMIN}>
        <LayoutPrivate><Element /></LayoutPrivate>
      </PrivateRoute>
    )}
  />
));
