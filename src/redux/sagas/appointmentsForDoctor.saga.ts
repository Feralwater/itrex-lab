import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import utils from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForDoctor } from '../../resources/appointments/appointments.types';
import { appointmentsForDoctor } from '../actions';

function* appointmentsForDoctorGet(action: ReturnType<typeof appointmentsForDoctor.pending>) {
  const { payload } = action;
  const response: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.getAppointmentsForDoctor, payload.offset, payload.limit);
  return response.data;
}

const appointmentsForDoctorGetSaga = utils.bind(null, appointmentsForDoctor, appointmentsForDoctorGet);

function* appointmentsForDoctorGetWatcher() {
  yield takeEvery(appointmentsForDoctor.pending, appointmentsForDoctorGetSaga);
}

function* appointmentsForDoctorSaga() {
  yield appointmentsForDoctorGetWatcher();
}

export default appointmentsForDoctorSaga;
