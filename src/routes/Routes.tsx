import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestorePassword from '../pages/authorisedPages/restorePassword/RestorePassword';
import SendEmail from '../pages/authorisedPages/sendEmail/SendEmail';
import SignUp from '../pages/authorisedPages/signUp/SignUp';
import Error404 from '../pages/error404Page/Error404';
import AuthorisedLayout from '../layouts/authorised/authorised';
import SignIn from '../pages/authorisedPages/signIn/SignIn';
import Public from '../layouts/public/public';
import MakeAnAppointmentForm from '../forms/appointmentForms/makeAnAppointmentForm';
import PatientsContainer from '../pages/publicPages/doctorPage/patients/patientsContainer';
import AppointmentsContainer from '../pages/publicPages/patientPage/appointmentsContainer/appointmentsContainer';

export const PATH = {
  PATIENTS: '/my-patients',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  APPOINTMENTS: '/my-appointments',
  MAKE_APPOINTMENT: '/create-an-appointment',
};

function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to={PATH.PATIENTS} />} />
      <Route path={PATH.RESTORE_PASSWORD} render={() => <AuthorisedLayout><RestorePassword /></AuthorisedLayout>} />
      <Route
        path={PATH.SEND_EMAIL}
        render={() => (
          <AuthorisedLayout>
            <SendEmail email="example@exam.com" />
          </AuthorisedLayout>
        )}
      />
      <Route path={PATH.SIGN_IN} render={() => <AuthorisedLayout><SignIn /></AuthorisedLayout>} />
      <Route path={PATH.SIGN_UP} render={() => <AuthorisedLayout><SignUp /></AuthorisedLayout>} />
      <Route path={PATH.PATIENTS} render={() => <Public><PatientsContainer /></Public>} />
      <Route path={PATH.APPOINTMENTS} render={() => <Public><AppointmentsContainer /></Public>} />
      <Route
        path={PATH.MAKE_APPOINTMENT}
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
