import { AxiosResponse } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { resolutionsForPatient } from '../actions';
import { utils } from './utils';
import { ResolutionsForPatientResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function* resolutionsForPatientGet(action: ReturnType<typeof resolutionsForPatient.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ResolutionsForPatientResponse> = yield call(resolutionsAPI.fetchResolutionsForPatient, payload.offset, payload.limit);
  return response.data;
}

const resolutionsForPatientGetSaga = utils.bind(null, resolutionsForPatient, resolutionsForPatientGet);

function* resolutionsForPatientGetWatcher() {
  yield takeEvery(resolutionsForPatient.pending, resolutionsForPatientGetSaga);
}

function* resolutionsForPatientSaga() {
  yield resolutionsForPatientGetWatcher();
}

export default resolutionsForPatientSaga;
