import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationSuccess, resolutions } from '../actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import utils from './utils';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsGet(action: ReturnType<typeof resolutions.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const resolutionsGetSaga = utils.bind(null, resolutions, resolutionsGet);

function* resolutionsGetWatcher() {
  yield takeEvery(resolutions.pending, resolutionsGetSaga);
}

function* resolutionsSaga() {
  yield resolutionsGetWatcher();
}

export default resolutionsSaga;
