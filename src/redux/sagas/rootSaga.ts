import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import makeAppointmentSaga from './makeAppointment.saga';
import registrationSaga from './registration.saga';
import profileSaga from './profile.saga';
import appointmentsForPatientSaga from './appointmentsForPatient.saga';
import deleteAppointmentSaga from './deleteAppointment.saga';
import resolutionSaga from './resolution.saga';
import resolutionsSaga from './resolutions.saga';
import editProfileSaga from './editProfile.saga';
import editResolutionSaga from './editResolution.saga';
import resolutionsForPatientSaga from './resolutionsForPatient.saga';
import occupationsSaga from './occupations.saga';
import getDoctorsByIDSaga from './getDoctorsByID.saga';
import freeDoctorTimeSaga from './freeTimeSaga';
import changePasswordSaga from './changePassword.saga';
import editPatientProfileSaga from './editPatientProfile.saga';
import cardsForDoctorSaga from './cardsForDoctor.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    makeAppointmentSaga(),
    registrationSaga(),
    profileSaga(),
    appointmentsForPatientSaga(),
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
    editPatientProfileSaga(),
    cardsForDoctorSaga(),
  ]);
}

export default rootSaga;
