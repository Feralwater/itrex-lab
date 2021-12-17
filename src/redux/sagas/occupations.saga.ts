import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationError, occupations } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import occupationsAPI from '../../resources/occupations/occupations.api';
import { OccupationsResponse } from '../../resources/occupations/occupations.types';

function* occupationsGet() {
  try {
    const response: AxiosResponse<OccupationsResponse> = yield call(occupationsAPI.fetchOccupations);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const occupationsGetSaga = utils.bind(null, occupations, occupationsGet);

function* occupationsGetWatcher() {
  yield takeEvery(occupations.pending, occupationsGetSaga);
}

function* occupationsSaga() {
  yield occupationsGetWatcher();
}

export default occupationsSaga;
