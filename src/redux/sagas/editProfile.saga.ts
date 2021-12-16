import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { editProfile, notificationSuccess } from '../actions';
import utils from './utils';
import { NewDoctorProfileResponse } from '../../resources/profile/profile.types';
import profile from '../../resources/profile/profile.api';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';

function* editProfilePatch(action: ReturnType<typeof editProfile.pending>) {
  const { payload } = action;
  const response: AxiosResponse<NewDoctorProfileResponse> = yield call(profile.editProfile, payload);
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
  return response.data;
}

const editProfilePatchSaga = utils.bind(null, editProfile, editProfilePatch);

function* editProfilePatchWatcher() {
  yield takeEvery(editProfile.pending, editProfilePatchSaga);
}

function* editProfileSaga() {
  yield editProfilePatchWatcher();
}

export default editProfileSaga;
