import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationSlice } from 'redux/reducers';
import { createErrorNotificationMessage } from 'redux/sagas/utils/createErrorNotificationMessage';
import { getAllDoctorsSlice } from 'redux/reducers/allDoctors.reducer';
import doctors from 'resources/doctors/doctors.api';
import { AllDoctors } from 'resources/doctors/doctors.types';
import { getAllUsersSlice } from 'redux/reducers/allPatients.reducer';
import { AllPatients } from 'resources/patients/patients.types';
import patientsAPI from 'resources/patients/patients.api';

function* fetchAllDoctors({ payload }: ReturnType<typeof getAllDoctorsSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<AllDoctors> = yield call(doctors.fetchAllDoctors, payload.offset, payload.limit);
    yield put(getAllDoctorsSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllDoctorsSlice.actions.failed());
  }
}

function* fetchAllPatients({ payload }: ReturnType<typeof getAllUsersSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<AllPatients> = yield call(patientsAPI.fetchAllPatients, payload.offset, payload.limit);
    yield put(getAllUsersSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllUsersSlice.actions.failed());
  }
}

export function* fetchAllUsersWatcher() {
  yield takeEvery(getAllDoctorsSlice.actions.pending, fetchAllDoctors);
  yield takeEvery(getAllUsersSlice.actions.pending, fetchAllPatients);
}
