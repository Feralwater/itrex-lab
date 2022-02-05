import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage } from './utils';
import occupationsAPI from '../../resources/occupations/occupations.api';
import { OccupationsResponse } from '../../resources/occupations/occupations.types';
import { notificationSlice, occupationsSlice } from '../reducers';

function* getOccupations() {
  try {
    const { data }: AxiosResponse<OccupationsResponse> = yield call(occupationsAPI.fetchOccupations);
    yield put(occupationsSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(occupationsSlice.actions.failed());
  }
}

function* getOccupationsWatcher() {
  yield takeEvery(occupationsSlice.actions.pending, getOccupations);
}

function* occupationsSaga() {
  yield getOccupationsWatcher();
}

export default occupationsSaga;
