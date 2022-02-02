import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage, utils } from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { FreeTimeResponse } from '../../resources/appointments/appointments.types';
import { freeDoctorTimeSlice, notificationSlice } from '../reducers';

function* getFreeDoctorTime(action: ReturnType<typeof freeDoctorTimeSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<FreeTimeResponse> = yield call(appointments.fetchFreeTime, payload.date, payload.doctorID);
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getFreeDoctorTimeSaga = utils.bind(null, freeDoctorTimeSlice.actions, getFreeDoctorTime);

function* getFreeDoctorTimeWatcher() {
  yield takeEvery(freeDoctorTimeSlice.actions.pending, getFreeDoctorTimeSaga);
}

function* freeDoctorTimeSaga() {
  yield getFreeDoctorTimeWatcher();
}

export default freeDoctorTimeSaga;
