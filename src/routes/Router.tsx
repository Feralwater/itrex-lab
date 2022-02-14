import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LayoutPrivate, MakeAppointmentFormContainer } from 'components';
import {
  ProfileContainer, ResolutionsForDoctorContainer, ResolutionsForPatientContainer,
} from 'pages';
import { PATH } from 'routes/const';
import { PrivateRoute } from 'routes/PrivateRoute';
import { AppointmentsForDoctorContainer } from 'modules/doctor';
import { AppointmentsForPatientContainer } from 'modules/patient';

export const Router = () => (

  <PrivateRoute>
    <Routes>
      <Route path={PATH.PATIENT_APPOINTMENTS} element={<LayoutPrivate><AppointmentsForPatientContainer /></LayoutPrivate>} />
      <Route path={PATH.DOCTOR_APPOINTMENTS} element={<LayoutPrivate><AppointmentsForDoctorContainer /></LayoutPrivate>} />
      <Route path={PATH.DOCTOR_RESOLUTIONS} element={<LayoutPrivate><ResolutionsForDoctorContainer /></LayoutPrivate>} />
      <Route path={PATH.PROFILE} element={<LayoutPrivate><ProfileContainer /></LayoutPrivate>} />
      <Route path={PATH.PATIENT_RESOLUTIONS} element={<LayoutPrivate><ResolutionsForPatientContainer /></LayoutPrivate>} />
      <Route
        path={PATH.CREATE_APPOINTMENT}
        element={<LayoutPrivate><MakeAppointmentFormContainer /></LayoutPrivate>}
      />
    </Routes>
  </PrivateRoute>
);
