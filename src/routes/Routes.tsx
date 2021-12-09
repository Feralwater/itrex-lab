import React, { useEffect, useState } from 'react';
import {
  Redirect, Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import SendEmail from 'pages/SendEmail/SendEmail';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import AppointmentsForDoctorContainer from 'pages/AppointmentsContainer/AppointmentsForDoctorContainer';
import AppointmentsForPatientContainer from 'pages/AppointmentsContainer/AppointmentsForPatientContainer';
import Error404 from '../components/Error404/Error404';
import AuthorisedLayout from '../components/LayoutAuthorised/LayoutAuthorised';
import LayoutPrivate from '../components/LayoutPrivate/LayoutPrivate';
import { useAppSelector } from '../hooks';
import { PATH } from './constants';
import checkUserRole from './utils';
import RestorePasswordForm from '../components/AuthForms/RestorePasswordForm';
import MakeAppointmentFormContainer from '../components/AppointmentForm/MakeAppointmentFormContainer';
import ResolutionsForDoctor from '../pages/Resolutions/ResolutionsForDoctor';
import PatientProfile from '../pages/PatientProfile/PatientProfile';
import ResolutionsForPatient from '../pages/Resolutions/ResolutionsForPatient';

function Routes() {
  const { roleName } = useAppSelector((state) => state.profile);
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
      <Route path={PATH.RESOLUTIONS} render={() => <LayoutPrivate><ResolutionsForDoctor /></LayoutPrivate>} />
      <Route path={PATH.PROFILE} render={() => <LayoutPrivate><PatientProfile /></LayoutPrivate>} />
      <Route path={PATH.MY_RESOLUTIONS} render={() => <LayoutPrivate><ResolutionsForPatient /></LayoutPrivate>} />
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
