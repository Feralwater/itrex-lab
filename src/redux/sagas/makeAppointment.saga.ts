import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { notificationError, notificationSuccess } from '../actions';
import { NewAppointmentResponse } from '../../resources/appointments/appointments.types';
import appointments from '../../resources/appointments/appointments.api';
import { createErrorNotificationMessage, utils } from './utils';
import { componentsDictionary } from '../../components';
import { makeAppointmentSlice } from '../reducers';

function* appointmentPost(action: ReturnType<typeof makeAppointmentSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<NewAppointmentResponse> = yield call(appointments.addAppointment, { ...payload });
    yield put(notificationSuccess(componentsDictionary.message.successMessageBodyMakeAppointment));
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const appointmentPostSaga = utils.bind(null, makeAppointmentSlice.actions, appointmentPost);

function* appointmentPostWatcher() {
  yield takeEvery(makeAppointmentSlice.actions.pending, appointmentPostSaga);
}

function* makeAppointmentSaga() {
  yield appointmentPostWatcher();
}

export default makeAppointmentSaga;
