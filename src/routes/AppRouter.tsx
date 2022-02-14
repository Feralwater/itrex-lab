import React from 'react';
import { getDoctorRoutes } from 'modules/doctor';
import { Route, Routes } from 'react-router-dom';
import { getAuthRoutes } from 'pages';
import { getPatientRoutes } from 'modules/patient/routes';
import { Error404 } from 'pages/Error404';

export const AppRouter: React.VFC = () => (
  <Routes>
    {getAuthRoutes()}
    {getPatientRoutes()}
    {getDoctorRoutes()}
    <Route path="*" element={<Error404 />} />
  </Routes>
);
