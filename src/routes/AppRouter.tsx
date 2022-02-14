import React from 'react';
import { AuthRoutes } from 'pages';
import { DoctorRoutes } from 'modules/doctor';
import { PatientRoutes } from 'modules/patient/routes';

export const AppRouter:React.VFC = () => (
  <>
    <AuthRoutes />
    <DoctorRoutes />
    <PatientRoutes />
  </>
);
