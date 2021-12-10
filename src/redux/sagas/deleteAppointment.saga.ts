import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import appointments from '../../resources/appointments/appointments.api';
import { notificationSuccess, deleteAppointment } from '../actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import utils from './utils';

function* appointmentDelete(action: ReturnType<typeof deleteAppointment.pending>) {
  const { payload } = action;
  const response: AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const appointmentDeleteSaga = utils.bind(null, deleteAppointment, appointmentDelete);

function* appointmentDeleteWatcher() {
  yield takeEvery(deleteAppointment.pending, appointmentDeleteSaga);
}

function* deleteAppointmentSaga() {
  yield appointmentDeleteWatcher();
}

export default deleteAppointmentSaga;
