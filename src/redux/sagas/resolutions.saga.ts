import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationError, resolutions } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsGet(action: ReturnType<typeof resolutions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const resolutionsGetSaga = utils.bind(null, resolutions, resolutionsGet);

function* resolutionsGetWatcher() {
  yield takeEvery(resolutions.pending, resolutionsGetSaga);
}

function* resolutionsSaga() {
  yield resolutionsGetWatcher();
}

export default resolutionsSaga;
