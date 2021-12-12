import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationSuccess, resolutionsForPatient } from '../actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import utils from './utils';
import { ResolutionsForPatientResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsForPatientPost(action: ReturnType<typeof resolutionsForPatient.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.getResolutionsForPatient, payload.offset, payload.limit);
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const resolutionsForPatientPostSaga = utils.bind(null, resolutionsForPatient, resolutionsForPatientPost);

function* resolutionsForPatientPostWatcher() {
  yield takeEvery(resolutionsForPatient.pending, resolutionsForPatientPostSaga);
}

function* resolutionsForPatientSaga() {
  yield resolutionsForPatientPostWatcher();
}

export default resolutionsForPatientSaga;
