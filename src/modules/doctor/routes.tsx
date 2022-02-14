import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'routes';
import { LayoutPrivate } from 'components';
import { v1 } from 'uuid';
import { doctorsRoutes } from 'modules/doctor/constants';
import { ROLES } from 'routes/constants';

export const DoctorRoutes = () => (
  <Routes>
    {doctorsRoutes.map(({ path, element: Element }) => (
      <Route
        key={v1()}
        path={path}
        element={(
          <PrivateRoute roleName={ROLES.DOCTOR}>
            <LayoutPrivate><Element /></LayoutPrivate>
          </PrivateRoute>
        )}
      />
    ))}
  </Routes>
);
