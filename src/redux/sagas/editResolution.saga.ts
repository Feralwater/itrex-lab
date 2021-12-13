import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { editResolution, notificationSuccess } from '../actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import utils from './utils';
import { EditResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* editResolutionPatch(action: ReturnType<typeof editResolution.pending>) {
  const { payload } = action;
  const response: AxiosResponse<EditResolutionResponse> = yield call(resolutionsAPI.editResolution, {
    resolution: payload.resolution,
    resolutionID: payload.resolutionID,
  });
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const editResolutionPatchSaga = utils.bind(null, editResolution, editResolutionPatch);

function* editResolutionPatchWatcher() {
  yield takeEvery(editResolution.pending, editResolutionPatchSaga);
}

function* editResolutionSaga() {
  yield editResolutionPatchWatcher();
}

export default editResolutionSaga;
