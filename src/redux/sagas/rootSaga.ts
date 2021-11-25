import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import appointmentSaga from './appointments.saga';
import registrationSaga from './registration.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    appointmentSaga(),
    registrationSaga(),
  ]);
}

export default rootSaga;
