import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ResolutionsForPatientResponse, ResolutionsResponse } from 'resources/resolutions/resolutions.types';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { notificationSlice, resolutionsForDoctorSlice } from '../reducers';
import { resolutionsForPatientSlice } from '../reducers/resolutionsForPatient.reducer';

function* fetchResolutionsForPatient({ payload }: ReturnType<typeof resolutionsForPatientSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.fetchResolutionsForPatient, payload.offset, payload.limit);
    yield put(resolutionsForPatientSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionsForPatientSlice.actions.failed());
  }
}

function* fetchResolutionsForDoctor({ payload } : ReturnType<typeof resolutionsForDoctorSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutionsForDoctor, payload.offset, payload.limit);
    yield put(resolutionsForDoctorSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionsForDoctorSlice.actions.failed());
  }
}

export function* fetchResolutionsWatcher() {
  yield takeEvery(resolutionsForPatientSlice.actions.pending, fetchResolutionsForPatient);
  yield takeEvery(resolutionsForDoctorSlice.actions.pending, fetchResolutionsForDoctor);
}
