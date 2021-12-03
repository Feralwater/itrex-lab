import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import runAsyncSaga from './runAsync.saga';
import appointmentsForPatient from '../actions/appointmentsForPatient.actions';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';

function* appointmentsForPatientPost(action: ReturnType<typeof appointmentsForPatient.pending>) {
  const { payload } = action;
  const response: AxiosResponse<AppointmentsForPatient> = yield call(appointments.getAppointmentsForPatient, payload.offset, payload.limit);
  return response.data;
}

const appointmentsForPatientPostSaga = runAsyncSaga.bind(null, appointmentsForPatient, appointmentsForPatientPost);

function* appointmentsForPatientPostWatcher() {
  yield takeEvery(appointmentsForPatient.pending, appointmentsForPatientPostSaga);
}

function* appointmentsForPatientSaga() {
  yield appointmentsForPatientPostWatcher();
}

export default appointmentsForPatientSaga;
