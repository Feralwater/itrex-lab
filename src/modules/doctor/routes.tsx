import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from 'routes';
import { LayoutPrivate } from 'components';
import { doctorsRoutes } from 'modules/doctor/constants';
import { ROLES } from 'routes/constants';

export const getDoctorRoutes = () => doctorsRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute roleName={ROLES.DOCTOR}>
        <LayoutPrivate><Element /></LayoutPrivate>
      </PrivateRoute>
        )}
  />
));
