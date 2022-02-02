import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createErrorNotificationMessage, utils } from './utils';
import doctors from '../../resources/doctors/doctors.api';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';
import { notificationError } from '../actions';
import { getDoctorsByIDSlice } from '../reducers';

function* getDoctorsByID(action: ReturnType<typeof getDoctorsByIDSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<DoctorsBySpecializationIdResponse> = yield call(doctors.fetchDoctorsBySpecializationId, payload);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getDoctorsByIDSaga = utils.bind(null, getDoctorsByIDSlice.actions, getDoctorsByID);

function* getDoctorsByIDWatcher() {
  yield takeEvery(getDoctorsByIDSlice.actions.pending, getDoctorsByIDSaga);
}

function* doctorsByIDSaga() {
  yield getDoctorsByIDWatcher();
}

export default doctorsByIDSaga;
