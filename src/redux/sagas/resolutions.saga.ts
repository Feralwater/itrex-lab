import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationSuccess } from '../actions/notification.actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import runAsyncSaga from './runAsync.saga';
import { resolutions } from '../actions/resolution.actions';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsPost(action: ReturnType<typeof resolutions.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.getResolutions, payload.offset, payload.limit);
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const resolutionsPostSaga = runAsyncSaga.bind(null, resolutions, resolutionsPost);

function* resolutionsPostWatcher() {
  yield takeEvery(resolutions.pending, resolutionsPostSaga);
}

function* resolutionsSaga() {
  yield resolutionsPostWatcher();
}

export default resolutionsSaga;
