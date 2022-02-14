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
  <PrivateRoute>
    <Routes>
      <Route path={PATH.APPOINTMENTS(roleName)} element={<LayoutPrivate><AppointmentsForPatientContainer /></LayoutPrivate>} />
      <Route path={PATH.APPOINTMENTS(roleName)} element={<LayoutPrivate><AppointmentsForDoctorContainer /></LayoutPrivate>} />
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
