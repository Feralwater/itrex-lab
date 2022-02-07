import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import { appointmentWatcher } from './appointment.saga';
import registrationSaga from './registration.saga';
import { profileWatcher } from './profile.saga';
import { resolutionWatcher } from './resolution.saga';
import { fetchResolutionsWatcher } from './fetchResolutions.saga';
import { fetchAppointmentsWatcher } from './fetchAppointments.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    fetchAppointmentsWatcher(),
    fetchResolutionsWatcher(),
    resolutionWatcher(),
    profileWatcher(),
    appointmentWatcher(),
  ]);
}

export default rootSaga;
