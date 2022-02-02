import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage, utils } from './utils';
import occupationsAPI from '../../resources/occupations/occupations.api';
import { OccupationsResponse } from '../../resources/occupations/occupations.types';
import { notificationSlice, occupationsSlice } from '../reducers';

function* getOccupations() {
  try {
    const response: AxiosResponse<OccupationsResponse> = yield call(occupationsAPI.fetchOccupations);
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getOccupationsSaga = utils.bind(null, occupationsSlice.actions, getOccupations);

function* getOccupationsWatcher() {
  yield takeEvery(occupationsSlice.actions.pending, getOccupationsSaga);
}

function* occupationsSaga() {
  yield getOccupationsWatcher();
}

export default occupationsSaga;
