import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { notificationSlice, resolutionsSlice } from '../reducers';

function* getResolutions({ payload } : ReturnType<typeof resolutionsSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
    yield put(resolutionsSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionsSlice.actions.failed());
  }
}

function* getResolutionsWatcher() {
  yield takeEvery(resolutionsSlice.actions.pending, getResolutions);
}

function* resolutionsSaga() {
  yield getResolutionsWatcher();
}

export default resolutionsSaga;
