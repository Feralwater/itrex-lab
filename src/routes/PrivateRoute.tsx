import React from 'react';
import { useAppSelector } from 'hooks';
import { selectProfile } from 'redux/reducers';
import { Navigate, useLocation } from 'react-router-dom';
import { PATH } from 'routes/constants';
import { FETCH_STATUS } from 'redux/reducers/constants';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { roleName, status } = useAppSelector(selectProfile);
  if (!roleName && status === FETCH_STATUS.FULFILLED) {
    return <Navigate to={PATH.SIGN_IN} state={{ from: location }} replace />;
  }
  return children;
};
