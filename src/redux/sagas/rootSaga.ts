import { all } from 'redux-saga/effects';
import { fetchAllPatientsWatcher } from 'redux/sagas/allPatients.saga';
import { appointmentWatcher } from './appointment.saga';
import { profileWatcher } from './profile.saga';
import { resolutionWatcher } from './resolution.saga';
import { fetchResolutionsWatcher } from './fetchResolutions.saga';
import { fetchAppointmentsWatcher } from './fetchAppointments.saga';
import { registrationWatcher } from './registration.saga';
import { loginWatcher } from './login.saga';

function* rootSaga() {
  yield all([
    fetchAppointmentsWatcher(),
    fetchResolutionsWatcher(),
    resolutionWatcher(),
    profileWatcher(),
    appointmentWatcher(),
    registrationWatcher(),
    loginWatcher(),
    fetchAllPatientsWatcher(),
  ]);
}

export default rootSaga;
