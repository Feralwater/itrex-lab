import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { createErrorNotificationMessage, utils } from './utils';
import { componentsDictionary } from '../../components';
import { notificationSlice, resolutionSlice } from '../reducers';

function* resolutionPost(action: ReturnType<typeof resolutionSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ResolutionResponse> = yield call(resolutionsAPI.createResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyCreateResolution));
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const resolutionPostSaga = utils.bind(null, resolutionSlice.actions, resolutionPost);

function* resolutionPostWatcher() {
  yield takeEvery(resolutionSlice.actions.pending, resolutionPostSaga);
}

function* resolutionSaga() {
  yield resolutionPostWatcher();
}

export default resolutionSaga;
