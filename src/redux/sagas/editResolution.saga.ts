import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { editResolution } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { EditResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';

function* editResolutionPatch(action: ReturnType<typeof editResolution.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<EditResolutionResponse> = yield call(resolutionsAPI.editResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditResolution));
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
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
