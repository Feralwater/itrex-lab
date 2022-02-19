import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { EditResolutionResponse, ResolutionResponse } from 'resources/resolutions/resolutions.types';
import { componentsDictionary } from 'components';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { notificationSlice, resolutionSlice } from '../reducers';

function* createResolution({ payload }: ReturnType<typeof resolutionSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ResolutionResponse> = yield call(resolutionsAPI.createResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyCreateResolution));
    yield put(resolutionSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionSlice.actions.failed());
  }
}

function* editResolution({ payload }: ReturnType<typeof resolutionSlice.actions.editResolutionPending>) {
  try {
    const { data }: AxiosResponse<EditResolutionResponse> = yield call(resolutionsAPI.editResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditResolution));
    yield put(resolutionSlice.actions.editResolutionFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(resolutionSlice.actions.editResolutionFailed());
  }
}

export function* resolutionWatcher() {
  yield takeLatest(resolutionSlice.actions.pending, createResolution);
  yield takeLatest(resolutionSlice.actions.editResolutionPending, editResolution);
}
