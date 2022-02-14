import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LayoutPrivate, MakeAppointmentFormContainer } from 'components';
import {
  ProfileContainer, ResolutionsForDoctorContainer, ResolutionsForPatientContainer,
} from 'pages';
import { PATH } from 'routes/constants';
import { PrivateRoute } from 'routes/PrivateRoute';
import { AppointmentsForDoctorContainer } from 'modules/doctor';
import { AppointmentsForPatientContainer } from 'modules/patient';
import { RoleName } from 'redux/reducers/reducers.types';

export const PrivateRouter = ({ roleName }: { roleName: RoleName }) => (
  <Routes>
    <Route
      path={PATH.DEFAULT}
      element={(
        <PrivateRoute>
          <LayoutPrivate><AppointmentsForPatientContainer /></LayoutPrivate>
        </PrivateRoute>
)}
    />
    <Route
      path={PATH.DEFAULT}
      element={(
        <PrivateRoute>
          <LayoutPrivate><AppointmentsForDoctorContainer /></LayoutPrivate>
        </PrivateRoute>
)}
    />
    <Route
      path={PATH.APPOINTMENTS(roleName)}
      element={(
        <PrivateRoute>
          <LayoutPrivate><AppointmentsForPatientContainer /></LayoutPrivate>
        </PrivateRoute>
      )}
    />
    <Route
      path={PATH.APPOINTMENTS(roleName)}
      element={(
        <PrivateRoute>
          <LayoutPrivate><AppointmentsForDoctorContainer /></LayoutPrivate>
        </PrivateRoute>
)}
    />
    <Route
      path={PATH.DOCTOR_RESOLUTIONS}
      element={(
        <PrivateRoute>
          <LayoutPrivate><ResolutionsForDoctorContainer /></LayoutPrivate>
        </PrivateRoute>
      )}
    />
    <Route
      path={PATH.PROFILE}
      element={(
        <PrivateRoute>
          <LayoutPrivate><ProfileContainer /></LayoutPrivate>
        </PrivateRoute>
)}
    />
    <Route
      path={PATH.PATIENT_RESOLUTIONS}
      element={(
        <PrivateRoute>
          <LayoutPrivate><ResolutionsForPatientContainer /></LayoutPrivate>
        </PrivateRoute>
)}
    />
    <Route
      path={PATH.CREATE_APPOINTMENT}
      element={(
        <PrivateRoute>
          <LayoutPrivate><MakeAppointmentFormContainer /></LayoutPrivate>
        </PrivateRoute>
)}
    />
  </Routes>
);
