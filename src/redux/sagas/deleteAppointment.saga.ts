import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import appointments from '../../resources/appointments/appointments.api';
import { notificationSuccess, deleteAppointment } from '../actions';
import { utils } from './utils';
import { componentsDictionary } from '../../components';

function* appointmentDelete(action: ReturnType<typeof deleteAppointment.pending>) {
  const { payload } = action;
  const response: AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
  yield put(notificationSuccess(componentsDictionary.message.successMessageBodyDeleteAppointment));
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
