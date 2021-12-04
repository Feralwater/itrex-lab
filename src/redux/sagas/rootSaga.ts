import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import appointmentSaga from './appointment.saga';
import registrationSaga from './registration.saga';
import profileSaga from './profile.saga';
import appointmentsForPatientSaga from './appointmentsForPatient.saga';
import appointmentsForDoctorSaga from './appointmentsForDoctor.saga';
import deleteAppointmentSaga from './deleteAppointment.saga';
import resolutionSaga from './resolution.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    appointmentSaga(),
    registrationSaga(),
    profileSaga(),
    appointmentsForPatientSaga(),
    appointmentsForDoctorSaga(),
    deleteAppointmentSaga(),
    resolutionSaga(),
  ]);
}

export default rootSaga;
