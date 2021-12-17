import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { doctorsByID, notificationError } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import doctors from '../../resources/doctors/doctors.api';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';

function* doctorsByIDGet(action: ReturnType<typeof doctorsByID.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<DoctorsBySpecializationIdResponse> = yield call(doctors.fetchDoctorsBySpecializationId, payload);
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const doctorsByIDGetSaga = utils.bind(null, doctorsByID, doctorsByIDGet);

function* doctorsByIDGetWatcher() {
  yield takeEvery(doctorsByID.pending, doctorsByIDGetSaga);
}

function* doctorsByIDSaga() {
  yield doctorsByIDGetWatcher();
}

export default doctorsByIDSaga;
