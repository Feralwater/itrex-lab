import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationError, resolutionsForPatient } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { ResolutionsForPatientResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsForPatientGet(action: ReturnType<typeof resolutionsForPatient.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.fetchResolutionsForPatient, payload.offset, payload.limit);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const resolutionsForPatientGetSaga = utils.bind(null, resolutionsForPatient, resolutionsForPatientGet);

function* resolutionsForPatientGetWatcher() {
  yield takeEvery(resolutionsForPatient.pending, resolutionsForPatientGetSaga);
}

function* resolutionsForPatientSaga() {
  yield resolutionsForPatientGetWatcher();
}

export default resolutionsForPatientSaga;
