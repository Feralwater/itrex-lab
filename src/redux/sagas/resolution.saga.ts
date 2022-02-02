import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { resolution } from '../actions';
import { ResolutionResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { createErrorNotificationMessage, utils } from './utils';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';

function* resolutionPost(action: ReturnType<typeof resolution.pending>) {
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

const resolutionPostSaga = utils.bind(null, resolution, resolutionPost);

function* resolutionPostWatcher() {
  yield takeEvery(resolution.pending, resolutionPostSaga);
}

function* resolutionSaga() {
  yield resolutionPostWatcher();
}

export default resolutionSaga;
