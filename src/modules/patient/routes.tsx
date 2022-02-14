import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'routes';
import { LayoutPrivate } from 'components';
import { v1 } from 'uuid';
import { patientsRoutes } from 'modules/patient/constants';
import { ROLES } from 'routes/constants';

export const PatientRoutes = () => (
  <Routes>
    {patientsRoutes.map(({ path, element: Element }) => (
      <Route
        key={v1()}
        path={path}
        element={(
          <PrivateRoute roleName={ROLES.PATIENT}>
            <LayoutPrivate><Element /></LayoutPrivate>
          </PrivateRoute>
        )}
      />
    ))}
  </Routes>
);
