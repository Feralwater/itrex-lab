import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import resolution from '../actions/resolution.actions';
import { ResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutions from '../../resources/resolutions/resolutions.api';
import { notificationSuccess } from '../actions/notification.actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import runAsyncSaga from './runAsync.saga';

function* resolutionPost(action: ReturnType<typeof resolution.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionResponse> = yield call(resolutions.createResolution, {
    resolution: payload.resolution,
    appointmentID: payload.appointmentID,
  });
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const resolutionPostSaga = runAsyncSaga.bind(null, resolution, resolutionPost);

function* resolutionPostWatcher() {
  yield takeEvery(resolution.pending, resolutionPostSaga);
}

function* resolutionSaga() {
  yield resolutionPostWatcher();
}

export default resolutionSaga;
