import { AxiosResponse } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { occupations } from '../actions';
import { utils } from './utils';
import occupationsAPI from '../../resources/occupations/occupations.api';
import { OccupationsResponse } from '../../resources/occupations/occupations.types';

function* occupationsGet() {
  const response: AxiosResponse<OccupationsResponse> = yield call(occupationsAPI.fetchOccupations);
  return response.data;
}

const occupationsGetSaga = utils.bind(null, occupations, occupationsGet);

function* occupationsGetWatcher() {
  yield takeEvery(occupations.pending, occupationsGetSaga);
}

function* occupationsSaga() {
  yield occupationsGetWatcher();
}

export default occupationsSaga;
