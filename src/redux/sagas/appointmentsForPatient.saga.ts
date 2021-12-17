import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage, utils } from './utils';
import { appointmentsForPatient, notificationError } from '../actions';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';

function* appointmentsForPatientGet(action: ReturnType<typeof appointmentsForPatient.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<AppointmentsForPatient> = yield call(appointments.fetchAppointmentsForPatient, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const appointmentsForPatientGetSaga = utils.bind(null, appointmentsForPatient, appointmentsForPatientGet);

function* appointmentsForPatientGetWatcher() {
  yield takeEvery(appointmentsForPatient.pending, appointmentsForPatientGetSaga);
}

function* appointmentsForPatientSaga() {
  yield appointmentsForPatientGetWatcher();
}

export default appointmentsForPatientSaga;
