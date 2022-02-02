import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { editPatientProfile } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { NewPatientProfileResponse } from '../../resources/profile/profile.types';
import profile from '../../resources/profile/profile.api';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';

function* editPatientProfilePatch(action: ReturnType<typeof editPatientProfile.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<NewPatientProfileResponse> = yield call(profile.editPatientProfile, payload);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditProfile));
    return response.data;
  } catch (error: any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const editPatientProfilePatchSaga = utils.bind(null, editPatientProfile, editPatientProfilePatch);

function* editPatientProfilePatchWatcher() {
  yield takeEvery(editPatientProfile.pending, editPatientProfilePatchSaga);
}

function* editPatientProfileSaga() {
  yield editPatientProfilePatchWatcher();
}

export default editPatientProfileSaga;
