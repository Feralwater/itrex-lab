import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import appointments from '../../resources/appointments/appointments.api';
import { createErrorNotificationMessage, utils } from './utils';
import { componentsDictionary } from '../../components';
import { appointmentsForDoctorSlice, notificationSlice } from '../reducers';

function* removeAppointment(action: ReturnType<typeof appointmentsForDoctorSlice.actions.deleteAppointmentPending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyDeleteAppointment));
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const removeAppointmentSaga = utils.bind(null, appointmentsForDoctorSlice.actions, removeAppointment);

function* removeAppointmentWatcher() {
  yield takeEvery(appointmentsForDoctorSlice.actions.deleteAppointmentPending, removeAppointmentSaga);
}

function* deleteAppointmentSaga() {
  yield removeAppointmentWatcher();
}

export default deleteAppointmentSaga;
