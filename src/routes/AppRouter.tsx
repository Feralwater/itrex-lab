import React from 'react';
import { getDoctorRoutes } from 'modules/doctor';
import { Route, Routes } from 'react-router-dom';
import { getAuthRoutes } from 'pages';
import { getPatientRoutes } from 'modules/patient/routes';
import { Error404 } from 'pages/Error404';
import { getAdminRoutes } from 'modules/admin/routes';

export const AppRouter: React.VFC = () => (
  <Routes>
    {getAuthRoutes()}
    {getPatientRoutes()}
    {getDoctorRoutes()}
    {getAdminRoutes()}
    <Route path="*" element={<Error404 />} />
  </Routes>
);
