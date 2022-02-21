import React from 'react';
import { Navigate } from 'react-router-dom';
import { PATH, ROLES } from 'routes/constants';
import { useProfile } from 'hooks';
import { RoleName } from 'redux/reducers/reducers.types';

function getDefaultPath(role: RoleName): string {
  switch (role) {
    case ROLES.DOCTOR: return PATH.DOCTOR_APPOINTMENTS;
    case ROLES.PATIENT: return PATH.PATIENT_APPOINTMENTS;
    case ROLES.PUBLIC: return PATH.SIGN_IN;
    default:
      throw new Error('');
  }
}

export const PrivateRoute = ({ children, roleName: needRole }: { children: JSX.Element, roleName: RoleName }) => {
  const { roleName } = useProfile();
  if (roleName !== undefined && needRole !== roleName) {
    const defaultPath = getDefaultPath(roleName);
    return <Navigate to={defaultPath} />;
  }
  return children;
};
