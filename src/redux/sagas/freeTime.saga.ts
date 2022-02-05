import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage } from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { FreeTimeResponse } from '../../resources/appointments/appointments.types';
import { freeDoctorTimeSlice, notificationSlice } from '../reducers';

function* getFreeDoctorTime({ payload }: ReturnType<typeof freeDoctorTimeSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<FreeTimeResponse> = yield call(appointments.fetchFreeTime, payload.date, payload.doctorID);
    yield put(freeDoctorTimeSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(freeDoctorTimeSlice.actions.failed());
  }
}

function* getFreeDoctorTimeWatcher() {
  yield takeEvery(freeDoctorTimeSlice.actions.pending, getFreeDoctorTime);
}

function* freeDoctorTimeSaga() {
  yield getFreeDoctorTimeWatcher();
}

export default freeDoctorTimeSaga;
