import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { EditResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';
import { editResolutionSlice } from '../reducers/editResolution.reducer';

function* editResolutionPatch({ payload }: ReturnType<typeof editResolutionSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<EditResolutionResponse> = yield call(resolutionsAPI.editResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditResolution));
    yield put(editResolutionSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(editResolutionSlice.actions.failed());
  }
}

function* editResolutionPatchWatcher() {
  yield takeEvery(editResolutionSlice.actions.pending, editResolutionPatch);
}

function* editResolutionSaga() {
  yield editResolutionPatchWatcher();
}

export default editResolutionSaga;
