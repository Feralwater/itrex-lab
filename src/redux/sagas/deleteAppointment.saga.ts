import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import deleteAppointment from '../actions/deleteAppointment.actions';
import appointments from '../../resources/appointments/appointments.api';
import { notificationSuccess } from '../actions/notification.actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import runAsyncSaga from './runAsync.saga';

function* appointmentDelete(action: ReturnType<typeof deleteAppointment.pending>) {
  const { payload } = action;
  const response: AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const appointmentDeleteSaga = runAsyncSaga.bind(null, deleteAppointment, appointmentDelete);

function* appointmentDeleteWatcher() {
  yield takeEvery(deleteAppointment.pending, appointmentDeleteSaga);
}

function* deleteAppointmentSaga() {
  yield appointmentDeleteWatcher();
}

export default deleteAppointmentSaga;
