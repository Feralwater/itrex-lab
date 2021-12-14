import { AxiosResponse } from 'axios';
import { call, takeEvery } from 'redux-saga/effects';
import { doctorsByID } from '../actions';
import utils from './utils';
import doctors from '../../resources/doctors/doctors.api';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';

function* doctorsByIDGet(action: ReturnType<typeof doctorsByID.pending>) {
  const { payload } = action;
  const response: AxiosResponse<DoctorsBySpecializationIdResponse> = yield call(doctors.fetchDoctorsBySpecializationId, payload);
  return response.data;
}

const doctorsByIDGetSaga = utils.bind(null, doctorsByID, doctorsByIDGet);

function* doctorsByIDGetWatcher() {
  yield takeEvery(doctorsByID.pending, doctorsByIDGetSaga);
}

function* doctorsByIDSaga() {
  yield doctorsByIDGetWatcher();
}

export default doctorsByIDSaga;
