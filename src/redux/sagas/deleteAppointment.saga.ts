import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import appointments from '../../resources/appointments/appointments.api';
import { notificationSuccess, deleteAppointment, notificationError } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { componentsDictionary } from '../../components';

function* appointmentDelete(action: ReturnType<typeof deleteAppointment.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
    yield put(notificationSuccess(componentsDictionary.message.successMessageBodyDeleteAppointment));
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const appointmentDeleteSaga = utils.bind(null, deleteAppointment, appointmentDelete);

function* appointmentDeleteWatcher() {
  yield takeEvery(deleteAppointment.pending, appointmentDeleteSaga);
}

function* deleteAppointmentSaga() {
  yield appointmentDeleteWatcher();
}

export default deleteAppointmentSaga;
