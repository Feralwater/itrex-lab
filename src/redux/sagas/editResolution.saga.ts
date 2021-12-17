import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { editResolution, notificationError, notificationSuccess } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { EditResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { componentsDictionary } from '../../components';

function* editResolutionPatch(action: ReturnType<typeof editResolution.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<EditResolutionResponse> = yield call(resolutionsAPI.editResolution, { ...payload });
    yield put(notificationSuccess(componentsDictionary.message.successMessageBodyEditResolution));
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const editResolutionPatchSaga = utils.bind(null, editResolution, editResolutionPatch);

function* editResolutionPatchWatcher() {
  yield takeEvery(editResolution.pending, editResolutionPatchSaga);
}

function* editResolutionSaga() {
  yield editResolutionPatchWatcher();
}

export default editResolutionSaga;
