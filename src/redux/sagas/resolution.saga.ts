import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { resolution, notificationSuccess } from '../actions';
import { ResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import utils from './utils';

function* resolutionPost(action: ReturnType<typeof resolution.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionResponse> = yield call(resolutionsAPI.createResolution, {
    resolution: payload.resolution,
    appointmentID: payload.appointmentID,
  });
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const resolutionPostSaga = utils.bind(null, resolution, resolutionPost);

function* resolutionPostWatcher() {
  yield takeEvery(resolution.pending, resolutionPostSaga);
}

function* resolutionSaga() {
  yield resolutionPostWatcher();
}

export default resolutionSaga;
