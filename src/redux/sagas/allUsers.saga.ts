import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { notificationSlice } from 'redux/reducers';
import { createErrorNotificationMessage } from 'redux/sagas/utils/createErrorNotificationMessage';
import { getAllDoctorsSlice } from 'redux/reducers/allDoctors.reducer';
import doctors from 'resources/doctors/doctors.api';
import { AllDoctors, Doctors } from 'resources/doctors/doctors.types';
import { getAllPatientsSlice } from 'redux/reducers/allPatients.reducer';
import { AllPatients, Users } from 'resources/patients/patients.types';
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

function* fetchAllPatients({ payload }: ReturnType<typeof getAllPatientsSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<AllPatients> = yield call(patientsAPI.fetchAllPatients, payload.offset, payload.limit);
    yield put(getAllPatientsSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllPatientsSlice.actions.failed());
  }
}

function* updatePatient({ payload }: ReturnType<typeof getAllPatientsSlice.actions.updatePatientPending>) {
  try {
    const { data }: AxiosResponse<Users> = yield call(patientsAPI.updatePatient, payload.id, { firstName: payload.firstName, lastName: payload.lastName });
    yield put(getAllPatientsSlice.actions.updatePatientFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllPatientsSlice.actions.updatePatientFailed());
  }
}

function* deletePatient({ payload }: ReturnType<typeof getAllPatientsSlice.actions.deletePatientPending>) {
  try {
    const { data }: AxiosResponse<string> = yield call(patientsAPI.deletePatient, payload);
    yield put(getAllPatientsSlice.actions.deletePatientFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllPatientsSlice.actions.deletePatientFailed());
  }
}

function* updateDoctor({ payload }: ReturnType<typeof getAllDoctorsSlice.actions.updateDoctorPending>) {
  try {
    const { data }: AxiosResponse<Doctors> = yield call(doctors.updateDoctor, payload.id, { firstName: payload.firstName, lastName: payload.lastName, specializations: [...payload.specializations] });
    yield put(getAllDoctorsSlice.actions.updateDoctorFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllDoctorsSlice.actions.updateDoctorFailed());
  }
}

function* deleteDoctor({ payload }: ReturnType<typeof getAllDoctorsSlice.actions.deleteDoctorPending>) {
  try {
    const { data }: AxiosResponse<string> = yield call(doctors.deleteDoctor, payload);
    yield put(getAllDoctorsSlice.actions.deleteDoctorFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getAllDoctorsSlice.actions.deleteDoctorFailed());
  }
}

export function* fetchAllUsersWatcher() {
  yield takeEvery(getAllDoctorsSlice.actions.pending, fetchAllDoctors);
  yield takeEvery(getAllPatientsSlice.actions.pending, fetchAllPatients);
  yield takeEvery(getAllPatientsSlice.actions.updatePatientPending, updatePatient);
  yield takeEvery(getAllPatientsSlice.actions.deletePatientPending, deletePatient);
  yield takeEvery(getAllDoctorsSlice.actions.updateDoctorPending, updateDoctor);
  yield takeEvery(getAllDoctorsSlice.actions.deleteDoctorPending, deleteDoctor);
}
