import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { freeDoctorTime, notificationError } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { FreeTimeResponse } from '../../resources/appointments/appointments.types';

function* freeDoctorTimeGet(action: ReturnType<typeof freeDoctorTime.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<FreeTimeResponse> = yield call(appointments.fetchFreeTime, payload.date, payload.doctorID);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const freeDoctorTimeGetSaga = utils.bind(null, freeDoctorTime, freeDoctorTimeGet);

function* freeDoctorTimeGetWatcher() {
  yield takeEvery(freeDoctorTime.pending, freeDoctorTimeGetSaga);
}

function* freeDoctorTimeSaga() {
  yield freeDoctorTimeGetWatcher();
}

export default freeDoctorTimeSaga;
