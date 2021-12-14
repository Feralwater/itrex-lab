import { AxiosResponse } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { freeDoctorTime } from '../actions';
import utils from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { FreeTimeResponse } from '../../resources/appointments/appointments.types';

function* freeDoctorTimeGet(action: ReturnType<typeof freeDoctorTime.pending>) {
  const { payload } = action;
  const response: AxiosResponse<FreeTimeResponse> = yield call(appointments.fetchFreeTime, payload.date, payload.doctorID);
  return response.data;
}

const freeDoctorTimeGetSaga = utils.bind(null, freeDoctorTime, freeDoctorTimeGet);

function* freeDoctorTimeGetWatcher() {
  yield takeEvery(freeDoctorTime.pending, freeDoctorTimeGetSaga);
}

function* freeDoctorTimeSaga() {
  yield freeDoctorTimeGetWatcher();
}

export default freeDoctorTimeSaga;
