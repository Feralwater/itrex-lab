import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PATH, ROLES } from 'routes/constants';
import { useProfile } from 'hooks';

function getDefaultPath(role: any): string {
  switch (role) {
    case ROLES.DOCTOR: return PATH.DOCTOR_APPOINTMENTS;
    case ROLES.PATIENT: return PATH.PATIENT_APPOINTMENTS;
    case null: return PATH.SIGN_IN;
    default:
      throw new Error('');
  }
}

export const PrivateRoute = ({ children, roleName: needRole }: { children: JSX.Element, roleName: any }) => {
  const { roleName } = useProfile();
  const location = useLocation();
  if (roleName !== undefined && needRole !== roleName) {
    const defaultPath = getDefaultPath(roleName);
    return <Navigate to={defaultPath} state={{ from: location }} replace />;
  }
  return children;
};
