import React from 'react';
import { Route } from 'react-router-dom';
import { AuthorisedLayout } from 'components';
import { authRoutes } from 'pages/auth/constants';
import { PrivateRoute } from 'routes';

export const getAuthRoutes = () => authRoutes.map(({ path, element: Element }) => (
  <Route
    key={path}
    path={path}
    element={(
      <PrivateRoute roleName={null}>
        <AuthorisedLayout>
          <Element />
        </AuthorisedLayout>
      </PrivateRoute>
          )}
  />
));
