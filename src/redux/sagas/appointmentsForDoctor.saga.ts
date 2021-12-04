import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import runAsyncSaga from './runAsync.saga';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForDoctor } from '../../resources/appointments/appointments.types';
import { appointmentsForDoctor } from '../actions/appointmentsForDoctors.actions';

function* appointmentsForDoctorPost(action: ReturnType<typeof appointmentsForDoctor.pending>) {
  const { payload } = action;
  const response: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.getAppointmentsForDoctor, payload.offset, payload.limit);
  return response.data;
}

const appointmentsForDoctorPostSaga = runAsyncSaga.bind(null, appointmentsForDoctor, appointmentsForDoctorPost);

function* appointmentsForDoctorPostWatcher() {
  yield takeEvery(appointmentsForDoctor.pending, appointmentsForDoctorPostSaga);
}

function* appointmentsForDoctorSaga() {
  yield appointmentsForDoctorPostWatcher();
}

export default appointmentsForDoctorSaga;
