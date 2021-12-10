import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import appointment from '../actions/appointment.actions';
import { NewAppointmentResponse } from '../../resources/appointments/appointments.types';
import appointments from '../../resources/appointments/appointments.api';
import utils from './utils';
import { notificationSuccess } from '../actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';

function* appointmentPost(action: ReturnType<typeof appointment.pending>) {
  const { payload } = action;
  const response: AxiosResponse<NewAppointmentResponse> = yield call(appointments.addAppointment, {
    date: payload.date,
    reason: payload.reason,
    note: payload.note,
    doctorID: payload.doctorID,
  });
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const appointmentPostSaga = utils.bind(null, appointment, appointmentPost);

function* appointmentPostWatcher() {
  yield takeEvery(appointment.pending, appointmentPostSaga);
}

function* appointmentSaga() {
  yield appointmentPostWatcher();
}

export default appointmentSaga;
