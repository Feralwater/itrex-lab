import React, { useEffect, useState } from 'react';
import {
  Redirect, Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import SendEmail from 'pages/sendEmail/SendEmail';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import AppointmentsForDoctorContainer from 'pages/UserPage/AppointmentsContainer/AppointmentsForDoctorContainer';
import AppointmentsForPatientContainer from 'pages/UserPage/AppointmentsContainer/AppointmentsForPatientContainer';
import Error404 from '../components/Error404Page/Error404';
import AuthorisedLayout from '../layouts/authorised/authorised';
import Public from '../layouts/public/public';
import { useAppSelector } from '../hooks';
import { PATH } from './constants';
import checkUserRole from './utils';
import RestorePasswordForm from '../forms/authForms/restorePasswordForm';
import MakeAppointmentFormContainer from '../forms/appointmentForm/MakeAppointmentFormContainer';

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
      <Route path={PATH.MY_PATIENTS} render={() => <Public><AppointmentsForDoctorContainer /></Public>} />
      <Route path={PATH.MY_APPOINTMENTS} render={() => <Public><AppointmentsForPatientContainer /></Public>} />
      <Route
        path={PATH.CREATE_APPOINTMENT}
        render={() => (
          <Public>
            <MakeAppointmentFormContainer />
          </Public>
        )}
      />
      <Route render={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;
