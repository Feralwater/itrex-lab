import React, { useEffect, useState } from 'react';
import {
  Route, useLocation, Routes, Navigate, useNavigate,
} from 'react-router-dom';
import { SendEmail } from 'pages/SendEmail/SendEmail';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';
import { useAppSelector } from 'hooks';
import {
  ResolutionsForDoctorContainer, ResolutionsForPatientContainer, EditProfileFormContainer, ProfileContainer,
} from 'pages';
import { selectProfile } from 'redux/reducers';
import { AppointmentsForDoctorContainer } from 'modules/doctor';
import { AppointmentsForPatientContainer } from 'modules/patient';
import checkUserRole from './utils';
import { PATH } from './constants';
import {
  Error404, AuthorisedLayout, LayoutPrivate, RestorePasswordForm, MakeAppointmentFormContainer,
} from '../components';

export const AppRouter:React.VFC = () => {
  const { roleName } = useAppSelector(selectProfile);
  const history = useNavigate();
  const location = useLocation();
  const [restorePassword, setRestorePassword] = useState<string>('');
  useEffect(() => {
    checkUserRole(history, roleName, location.pathname);
  }, [history, roleName, location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PATH.SIGN_IN} />} />
      <Route
        path={PATH.RESTORE_PASSWORD}
        element={
          <AuthorisedLayout><RestorePasswordForm setRestorePassword={setRestorePassword} /></AuthorisedLayout>
}
      />
      <Route
        path={PATH.SEND_EMAIL}
        element={(
          <AuthorisedLayout>
            <SendEmail email={restorePassword} />
          </AuthorisedLayout>
        )}
      />
      <Route path={PATH.SIGN_IN} element={<AuthorisedLayout><SignIn /></AuthorisedLayout>} />
      <Route path={PATH.SIGN_UP} element={<AuthorisedLayout><SignUp /></AuthorisedLayout>} />
      <Route path={PATH.PATIENTS} element={<LayoutPrivate><AppointmentsForDoctorContainer /></LayoutPrivate>} />
      <Route path={PATH.APPOINTMENTS} element={<LayoutPrivate><AppointmentsForPatientContainer /></LayoutPrivate>} />
      <Route path={PATH.RESOLUTIONS} element={<LayoutPrivate><ResolutionsForDoctorContainer /></LayoutPrivate>} />
      <Route path={PATH.PROFILE} element={<LayoutPrivate><ProfileContainer /></LayoutPrivate>} />
      <Route path={PATH.EDIT_PROFILE} element={<LayoutPrivate><EditProfileFormContainer /></LayoutPrivate>} />
      <Route path={PATH.MY_RESOLUTIONS} element={<LayoutPrivate><ResolutionsForPatientContainer /></LayoutPrivate>} />
      <Route
        path={PATH.CREATE_APPOINTMENT}
        element={(
          <LayoutPrivate>
            <MakeAppointmentFormContainer />
          </LayoutPrivate>
        )}
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
