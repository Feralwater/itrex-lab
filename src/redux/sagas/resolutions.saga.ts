import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage, utils } from './utils';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { notificationSlice, resolutionsSlice } from '../reducers';

function* getResolutions(action: ReturnType<typeof resolutionsSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getResolutionsSaga = utils.bind(null, resolutionsSlice.actions, getResolutions);

function* getResolutionsWatcher() {
  yield takeEvery(resolutionsSlice.actions.pending, getResolutionsSaga);
}

function* resolutionsSaga() {
  yield getResolutionsWatcher();
}

export default resolutionsSaga;
