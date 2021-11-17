import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestorePassword from '../pages/authorisedPages/restorePassword/RestorePassword';
import SendEmail from '../pages/authorisedPages/sendEmail/SendEmail';
import SignUp from '../pages/authorisedPages/signUp/SignUp';
import Error404 from '../pages/error404Page/Error404';
import DoctorViewTemplate from '../pages/publicPages/doctorViews/doctorViewTemplate/DoctorViewTemplate';
import AppointmentsTemplate from '../pages/publicPages/AppointmentsTemplate';
import AuthorisedLayout from '../layouts/authorised/authorised';
import SignIn from '../pages/authorisedPages/signIn/SignIn';
import Public from '../layouts/public/public';
import MakeAnAppointment from '../pages/publicPages/makeAnAppointment';

export const PATH = {
  PATIENTS: '/patients',
  RESTORE_PASSWORD: '/restore-password',
  SEND_EMAIL: '/send-email',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  APPOINTMENTS: '/appointments',
  MAKE_APPOINTMENT: '/make-an-appointment',
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
      <Route path={PATH.PATIENTS} render={() => <Public><DoctorViewTemplate /></Public>} />
      <Route path={PATH.APPOINTMENTS} render={() => <Public><AppointmentsTemplate /></Public>} />
      <Route
        path={PATH.MAKE_APPOINTMENT}
        render={() => (
          <Public>
            <MakeAnAppointment />
          </Public>
        )}
      />
      <Route render={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;
