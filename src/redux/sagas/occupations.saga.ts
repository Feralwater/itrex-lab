import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationError, occupations } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import occupationsAPI from '../../resources/occupations/occupations.api';
import { OccupationsResponse } from '../../resources/occupations/occupations.types';

function* getOccupations() {
  try {
    const response: AxiosResponse<OccupationsResponse> = yield call(occupationsAPI.fetchOccupations);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getOccupationsSaga = utils.bind(null, occupations, getOccupations);

function* getOccupationsWatcher() {
  yield takeEvery(occupations.pending, getOccupationsSaga);
}

function* occupationsSaga() {
  yield getOccupationsWatcher();
}

export default occupationsSaga;
