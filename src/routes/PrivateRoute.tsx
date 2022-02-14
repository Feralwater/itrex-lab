import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PATH } from 'routes/constants';
import { loginRepository } from 'resources/loginRepository';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const accessToken = loginRepository.getAccessToken() || '';
  if (!accessToken) {
    return <Navigate to={PATH.SIGN_IN} state={{ from: location }} replace />;
  }
  return children;
};
