import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import makeAppointmentSaga from './makeAppointment.saga';
import registrationSaga from './registration.saga';
import profileSaga from './profile.saga';
import deleteAppointmentSaga from './deleteAppointment.saga';
import resolutionSaga from './resolution.saga';
import resolutionsSaga from './resolutions.saga';
import editProfileSaga from './editProfile.saga';
import editResolutionSaga from './editResolution.saga';
import resolutionsForPatientSaga from './resolutionsForPatient.saga';
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
    resolutionSaga(),
    resolutionsSaga(),
    editProfileSaga(),
    editResolutionSaga(),
    resolutionsForPatientSaga(),
    occupationsSaga(),
    getDoctorsByIDSaga(),
    freeDoctorTimeSaga(),
    changePasswordSaga(),
    fetchAppointmentsWatcher(),
  ]);
}

export default rootSaga;
