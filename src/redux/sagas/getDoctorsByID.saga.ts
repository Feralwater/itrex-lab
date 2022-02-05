import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import doctors from '../../resources/doctors/doctors.api';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';
import { getDoctorsByIDSlice, notificationSlice } from '../reducers';

function* getDoctorsByID({ payload }: ReturnType<typeof getDoctorsByIDSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<DoctorsBySpecializationIdResponse> = yield call(doctors.fetchDoctorsBySpecializationId, payload);
    yield put(getDoctorsByIDSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getDoctorsByIDSlice.actions.failed());
  }
}

function* getDoctorsByIDWatcher() {
  yield takeEvery(getDoctorsByIDSlice.actions.pending, getDoctorsByID);
}

function* doctorsByIDSaga() {
  yield getDoctorsByIDWatcher();
}

export default doctorsByIDSaga;
