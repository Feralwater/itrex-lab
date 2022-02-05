import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import appointments from '../../resources/appointments/appointments.api';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { componentsDictionary } from '../../components';
import { appointmentsForDoctorSlice, notificationSlice } from '../reducers';

function* removeAppointment({ payload } : ReturnType<typeof appointmentsForDoctorSlice.actions.deleteAppointmentPending>) {
  try {
    const { data } : AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyDeleteAppointment));
    yield put(appointmentsForDoctorSlice.actions.deleteAppointmentFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.deleteAppointmentFailed());
  }
}

function* removeAppointmentWatcher() {
  yield takeEvery(appointmentsForDoctorSlice.actions.deleteAppointmentPending, removeAppointment);
}

function* deleteAppointmentSaga() {
  yield removeAppointmentWatcher();
}

export default deleteAppointmentSaga;
