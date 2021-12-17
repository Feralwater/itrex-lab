import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage, utils } from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForDoctor } from '../../resources/appointments/appointments.types';
import { appointmentsForDoctor, notificationError } from '../actions';

function* appointmentsForDoctorGet(action: ReturnType<typeof appointmentsForDoctor.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.fetchAppointmentsForDoctor, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const appointmentsForDoctorGetSaga = utils.bind(null, appointmentsForDoctor, appointmentsForDoctorGet);

function* appointmentsForDoctorGetWatcher() {
  yield takeEvery(appointmentsForDoctor.pending, appointmentsForDoctorGetSaga);
}

function* appointmentsForDoctorSaga() {
  yield appointmentsForDoctorGetWatcher();
}

export default appointmentsForDoctorSaga;
