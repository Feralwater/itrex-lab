import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage, utils } from './utils';
import { EditResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';
import { editResolutionSlice } from '../reducers/editResolution.reducer';

function* editResolutionPatch(action: ReturnType<typeof editResolutionSlice.actions.pending>) {
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

const editResolutionPatchSaga = utils.bind(null, editResolutionSlice.actions, editResolutionPatch);

function* editResolutionPatchWatcher() {
  yield takeEvery(editResolutionSlice.actions.pending, editResolutionPatchSaga);
}

function* editResolutionSaga() {
  yield editResolutionPatchWatcher();
}

export default editResolutionSaga;
