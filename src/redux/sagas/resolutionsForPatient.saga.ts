import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage, utils } from './utils';
import { ResolutionsForPatientResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { notificationSlice } from '../reducers';
import { resolutionsForPatientSlice } from '../reducers/resolutionsForPatient.reducer';

function* getResolutionsForPatient(action: ReturnType<typeof resolutionsForPatientSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.fetchResolutionsForPatient, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getResolutionsForPatientSaga = utils.bind(null, resolutionsForPatientSlice.actions, getResolutionsForPatient);

function* getResolutionsForPatientWatcher() {
  yield takeEvery(resolutionsForPatientSlice.actions.pending, getResolutionsForPatientSaga);
}

function* resolutionsForPatientSaga() {
  yield getResolutionsForPatientWatcher();
}

export default resolutionsForPatientSaga;
