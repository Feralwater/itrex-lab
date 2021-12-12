import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { editProfile } from '../actions';
import utils from './utils';
import { NewDoctorProfileResponse } from '../../resources/profile/profile.types';
import profile from '../../resources/profile/profile.api';

function* editProfilePost(action: ReturnType<typeof editProfile.pending>) {
  const { payload } = action;
  const response: AxiosResponse<NewDoctorProfileResponse> = yield call(
    profile.editProfile,
    {
      firstName: payload.firstName,
      lastName: payload.lastName,
      avatar: payload.avatar || undefined,
    },
  );

  return response.data;
}

const editProfilePostSaga = utils.bind(null, editProfile, editProfilePost);

function* editProfilePostWatcher() {
  yield takeEvery(editProfile.pending, editProfilePostSaga);
}

function* editProfileSaga() {
  yield editProfilePostWatcher();
}

export default editProfileSaga;
