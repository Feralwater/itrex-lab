import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { componentsDictionary } from '../../components';
import { notificationSlice, resolutionSlice } from '../reducers';

function* resolutionPost({ payload }: ReturnType<typeof resolutionSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ResolutionResponse> = yield call(resolutionsAPI.createResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyCreateResolution));
    yield put(resolutionSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionSlice.actions.failed());
  }
}

function* resolutionPostWatcher() {
  yield takeEvery(resolutionSlice.actions.pending, resolutionPost);
}

function* resolutionSaga() {
  yield resolutionPostWatcher();
}

export default resolutionSaga;
