import React, { useEffect, useState } from 'react';
import {
  Redirect, Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import { SendEmail } from 'pages/SendEmail/SendEmail';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';
import { AppointmentsForDoctorContainer } from 'pages/AppointmentsContainer/AppointmentsForDoctorContainer';
import { AppointmentsForPatientContainer } from 'pages/AppointmentsContainer/AppointmentsForPatientContainer';
import {
  Error404, AuthorisedLayout, LayoutPrivate, RestorePasswordForm, MakeAppointmentFormContainer,
} from '../components';
import { useAppSelector } from '../hooks';
import { PATH } from './constants';
import checkUserRole from './utils';
import {
  ResolutionsForDoctorContainer, ResolutionsForPatientContainer, EditProfileFormContainer,
} from '../pages';
import { selectProfile } from '../redux/reducers';
import ProfileContainer from '../pages/Profile/ProfileContainer';

function Routes() {
  const { roleName } = useAppSelector(selectProfile);
  const history = useHistory();
  const location = useLocation();
  const [restorePassword, setRestorePassword] = useState<string>('');
  useEffect(() => {
    checkUserRole(history, roleName, location.pathname);
  }, [roleName, location.pathname]);
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to={PATH.SIGN_IN} />} />
      <Route
        path={PATH.RESTORE_PASSWORD}
        render={
        () => <AuthorisedLayout><RestorePasswordForm setRestorePassword={setRestorePassword} /></AuthorisedLayout>
}
      />
      <Route
        path={PATH.SEND_EMAIL}
        render={() => (
          <AuthorisedLayout>
            <SendEmail email={restorePassword} />
          </AuthorisedLayout>
        )}
      />
      <Route path={PATH.SIGN_IN} render={() => <AuthorisedLayout><SignIn /></AuthorisedLayout>} />
      <Route path={PATH.SIGN_UP} render={() => <AuthorisedLayout><SignUp /></AuthorisedLayout>} />
      <Route path={PATH.PATIENTS} render={() => <LayoutPrivate><AppointmentsForDoctorContainer /></LayoutPrivate>} />
      <Route path={PATH.APPOINTMENTS} render={() => <LayoutPrivate><AppointmentsForPatientContainer /></LayoutPrivate>} />
      <Route path={PATH.RESOLUTIONS} render={() => <LayoutPrivate><ResolutionsForDoctorContainer /></LayoutPrivate>} />
      <Route exact path={PATH.PROFILE} render={() => <LayoutPrivate><ProfileContainer /></LayoutPrivate>} />
      <Route path={PATH.EDIT_PROFILE} render={() => <LayoutPrivate><EditProfileFormContainer /></LayoutPrivate>} />
      <Route path={PATH.MY_RESOLUTIONS} render={() => <LayoutPrivate><ResolutionsForPatientContainer /></LayoutPrivate>} />
      <Route
        path={PATH.CREATE_APPOINTMENT}
        render={() => (
          <LayoutPrivate>
            <MakeAppointmentFormContainer />
          </LayoutPrivate>
        )}
      />
      <Route render={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;
