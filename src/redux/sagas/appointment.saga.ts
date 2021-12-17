import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { appointment, notificationSuccess } from '../actions';
import { NewAppointmentResponse } from '../../resources/appointments/appointments.types';
import appointments from '../../resources/appointments/appointments.api';
import utils from './utils';
import { componentsDictionary } from '../../components';

function* appointmentPost(action: ReturnType<typeof appointment.pending>) {
  const { payload } = action;
  const response: AxiosResponse<NewAppointmentResponse> = yield call(appointments.addAppointment, { ...payload });
  yield put(notificationSuccess(componentsDictionary.message.successMessageBodyMakeAppointment));
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
