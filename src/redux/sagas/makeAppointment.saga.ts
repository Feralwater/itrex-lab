import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { NewAppointmentResponse } from '../../resources/appointments/appointments.types';
import appointments from '../../resources/appointments/appointments.api';
import { createErrorNotificationMessage } from './utils';
import { componentsDictionary } from '../../components';
import { makeAppointmentSlice, notificationSlice } from '../reducers';

function* appointmentPost({ payload }: ReturnType<typeof makeAppointmentSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<NewAppointmentResponse> = yield call(appointments.addAppointment, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyMakeAppointment));
    yield put(makeAppointmentSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(makeAppointmentSlice.actions.failed());
  }
}

function* appointmentPostWatcher() {
  yield takeEvery(makeAppointmentSlice.actions.pending, appointmentPost);
}

function* makeAppointmentSaga() {
  yield appointmentPostWatcher();
}

export default makeAppointmentSaga;
