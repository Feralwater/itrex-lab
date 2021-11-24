import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import appointmentSaga from './appointments.saga';

function* rootSaga() {
  yield all([
    loginSaga(),
    appointmentSaga(),
  ]);
}

export default rootSaga;
