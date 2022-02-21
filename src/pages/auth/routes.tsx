import React from 'react';
import { Route } from 'react-router-dom';
import { AuthorisedLayout } from 'components';
import { authRoutes } from 'pages/auth/constants';
import { PrivateRoute } from 'routes';
import { ROLES } from 'routes/constants';

export const getAuthRoutes = () => authRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute roleName={ROLES.PUBLIC}>
        <AuthorisedLayout>
          <Element />
        </AuthorisedLayout>
      </PrivateRoute>
          )}
  />
));
