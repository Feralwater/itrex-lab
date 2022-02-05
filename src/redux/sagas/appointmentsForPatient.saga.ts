import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import appointments from '../../resources/appointments/appointments.api';
import { AppointmentsForPatient } from '../../resources/appointments/appointments.types';
import { appointmentsForPatientSlice, notificationSlice } from '../reducers';

function* getAppointmentsForPatient({ payload }: ReturnType<typeof appointmentsForPatientSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<AppointmentsForPatient> = yield call(appointments.fetchAppointmentsForPatient, payload.offset, payload.limit);
    yield put(appointmentsForPatientSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForPatientSlice.actions.failed());
  }
}

function* getAppointmentsForPatientWatcher() {
  yield takeEvery(appointmentsForPatientSlice.actions.pending, getAppointmentsForPatient);
}

function* appointmentsForPatientSaga() {
  yield getAppointmentsForPatientWatcher();
}

export default appointmentsForPatientSaga;
