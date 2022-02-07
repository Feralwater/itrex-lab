import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import makeAppointmentSaga from './makeAppointment.saga';
import registrationSaga from './registration.saga';
import profileSaga from './profile.saga';
import deleteAppointmentSaga from './deleteAppointment.saga';
import { resolutionWatcher } from './resolution.saga';
import editProfileSaga from './editProfile.saga';
import { fetchResolutionsWatcher } from './fetchResolutions.saga';
import occupationsSaga from './occupations.saga';
import getDoctorsByIDSaga from './getDoctorsByID.saga';
import freeDoctorTimeSaga from './freeTime.saga';
import changePasswordSaga from './changePassword.saga';
import { fetchAppointmentsWatcher } from './fetchAppointments.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    makeAppointmentSaga(),
    registrationSaga(),
    profileSaga(),
    deleteAppointmentSaga(),
    editProfileSaga(),
    occupationsSaga(),
    getDoctorsByIDSaga(),
    freeDoctorTimeSaga(),
    changePasswordSaga(),
    fetchAppointmentsWatcher(),
    fetchResolutionsWatcher(),
    resolutionWatcher(),
  ]);
}

export default rootSaga;
