import React, { useEffect, useState } from 'react';
import {
  Redirect, Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import SendEmail from 'pages/sendEmail/SendEmail';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import PatientsContainer from 'pages/doctorPage/patients/patientsContainer';
import AppointmentsContainer from 'pages/patientPage/appointmentsContainer/appointmentsContainer';
import Error404 from '../pages/error404Page/Error404';
import AuthorisedLayout from '../layouts/authorised/authorised';
import Public from '../layouts/public/public';
import MakeAnAppointmentForm from '../forms/appointmentForms/makeAnAppointmentForm';
import { useAppSelector } from '../hooks';
import { PATH } from './constants';
import checkUserRole from './utils';
import RestorePasswordForm from '../forms/authForms/restorePasswordForm';

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
      <Route path={PATH.RESTORE_PASSWORD} render={() => <AuthorisedLayout><RestorePasswordForm setRestorePassword={setRestorePassword} /></AuthorisedLayout>} />
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
      <Route path={PATH.MY_PATIENTS} render={() => <Public><PatientsContainer /></Public>} />
      <Route path={PATH.MY_APPOINTMENTS} render={() => <Public><AppointmentsContainer /></Public>} />
      <Route
        path={PATH.CREATE_APPOINTMENT}
        render={() => (
          <Public>
            <MakeAnAppointmentForm />
          </Public>
        )}
      />
      <Route render={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;
