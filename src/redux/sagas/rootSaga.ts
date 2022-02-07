import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import makeAppointmentSaga from './makeAppointment.saga';
import registrationSaga from './registration.saga';
import { profileWatcher } from './profile.saga';
import deleteAppointmentSaga from './deleteAppointment.saga';
import { resolutionWatcher } from './resolution.saga';
import { fetchResolutionsWatcher } from './fetchResolutions.saga';
import occupationsSaga from './occupations.saga';
import getDoctorsByIDSaga from './getDoctorsByID.saga';
import freeDoctorTimeSaga from './freeTime.saga';
import { fetchAppointmentsWatcher } from './fetchAppointments.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    makeAppointmentSaga(),
    registrationSaga(),
    deleteAppointmentSaga(),
    occupationsSaga(),
    getDoctorsByIDSaga(),
    freeDoctorTimeSaga(),
    fetchAppointmentsWatcher(),
    fetchResolutionsWatcher(),
    resolutionWatcher(),
    profileWatcher(),
  ]);
}

export default rootSaga;
