import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { editProfile, notificationError, notificationSuccess } from '../actions';
import { createErrorNotificationMessage, utils } from './utils';
import { NewDoctorProfileResponse } from '../../resources/profile/profile.types';
import profile from '../../resources/profile/profile.api';
import { componentsDictionary } from '../../components';

function* editProfilePatch(action: ReturnType<typeof editProfile.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<NewDoctorProfileResponse> = yield call(profile.editProfile, payload);
    yield put(notificationSuccess(componentsDictionary.message.successMessageBodyEditProfile));
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const editProfilePatchSaga = utils.bind(null, editProfile, editProfilePatch);

function* editProfilePatchWatcher() {
  yield takeEvery(editProfile.pending, editProfilePatchSaga);
}

function* editProfileSaga() {
  yield editProfilePatchWatcher();
}

export default editProfileSaga;
