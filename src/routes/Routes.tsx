import React, { useEffect, useState } from 'react';
import {
  Redirect, Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import SendEmail from 'pages/SendEmail/SendEmail';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import AppointmentsForDoctorContainer from 'pages/AppointmentsContainer/AppointmentsForDoctorContainer';
import AppointmentsForPatientContainer from 'pages/AppointmentsContainer/AppointmentsForPatientContainer';
import Error404 from '../components/Error404Page/Error404';
import AuthorisedLayout from '../layouts/Authorised/Authorised';
import Privat from '../layouts/Privat/Privat';
import { useAppSelector } from '../hooks';
import { PATH } from './constants';
import checkUserRole from './utils';
import RestorePasswordForm from '../forms/authForms/restorePasswordForm';
import MakeAppointmentFormContainer from '../forms/appointmentForm/MakeAppointmentFormContainer';
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
      <Route path={PATH.PATIENTS} render={() => <Privat><AppointmentsForDoctorContainer /></Privat>} />
      <Route path={PATH.APPOINTMENTS} render={() => <Privat><AppointmentsForPatientContainer /></Privat>} />
      <Route path={PATH.RESOLUTIONS} render={() => <Privat><ResolutionsForDoctor /></Privat>} />
      <Route path={PATH.PROFILE} render={() => <Privat><PatientProfile /></Privat>} />
      <Route path={PATH.MY_RESOLUTIONS} render={() => <Privat><ResolutionsForPatient /></Privat>} />
      <Route
        path={PATH.CREATE_APPOINTMENT}
        render={() => (
          <Privat>
            <MakeAppointmentFormContainer />
          </Privat>
        )}
      />
      <Route render={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;
