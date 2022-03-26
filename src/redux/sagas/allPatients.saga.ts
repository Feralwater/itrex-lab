import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationSlice } from 'redux/reducers';
import { createErrorNotificationMessage } from 'redux/sagas/utils/createErrorNotificationMessage';
import { getAllUsersSlice } from 'redux/reducers/allPatients.reducer';
import { AllPatients } from 'resources/patients/patients.types';
import patientsAPI from 'resources/patients/patients.api';

function* fetchAllPatients({ payload }: ReturnType<typeof getAllUsersSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<AllPatients> = yield call(patientsAPI.fetchAllPatients, payload.offset, payload.limit);
    yield put(getAllUsersSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllUsersSlice.actions.failed());
  }
}
export function* fetchAllPatientsWatcher() {
  yield takeEvery(getAllUsersSlice.actions.pending, fetchAllPatients);
}
