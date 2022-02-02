import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage, utils } from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';
import { appointmentsForPatientSlice, notificationSlice } from '../reducers';

function* getAppointmentsForPatient(action: ReturnType<typeof appointmentsForPatientSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<AppointmentsForPatient> = yield call(appointments.fetchAppointmentsForPatient, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getAppointmentsForPatientSaga = utils.bind(null, appointmentsForPatientSlice.actions, getAppointmentsForPatient);

function* getAppointmentsForPatientWatcher() {
  yield takeEvery(appointmentsForPatientSlice.actions.pending, getAppointmentsForPatientSaga);
}

function* appointmentsForPatientSaga() {
  yield getAppointmentsForPatientWatcher();
}

export default appointmentsForPatientSaga;
