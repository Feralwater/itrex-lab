import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage } from './utils';
import { ResolutionsForPatientResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { notificationSlice } from '../reducers';
import { resolutionsForPatientSlice } from '../reducers/resolutionsForPatient.reducer';

function* getResolutionsForPatient({ payload }: ReturnType<typeof resolutionsForPatientSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.fetchResolutionsForPatient, payload.offset, payload.limit);
    yield put(resolutionsForPatientSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionsForPatientSlice.actions.failed());
  }
}

function* getResolutionsForPatientWatcher() {
  yield takeEvery(resolutionsForPatientSlice.actions.pending, getResolutionsForPatient);
}

function* resolutionsForPatientSaga() {
  yield getResolutionsForPatientWatcher();
}

export default resolutionsForPatientSaga;
