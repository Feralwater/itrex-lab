import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationError, resolutionsForPatient } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { ResolutionsForPatientResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* getResolutionsForPatient(action: ReturnType<typeof resolutionsForPatient.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.fetchResolutionsForPatient, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getResolutionsForPatientSaga = utils.bind(null, resolutionsForPatient, getResolutionsForPatient);

function* getResolutionsForPatientWatcher() {
  yield takeEvery(resolutionsForPatient.pending, getResolutionsForPatientSaga);
}

function* resolutionsForPatientSaga() {
  yield getResolutionsForPatientWatcher();
}

export default resolutionsForPatientSaga;
