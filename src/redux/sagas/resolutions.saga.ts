import { AxiosResponse } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { resolutions } from '../actions';
import { utils } from './utils';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsGet(action: ReturnType<typeof resolutions.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
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
