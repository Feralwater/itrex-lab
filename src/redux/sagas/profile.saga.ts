import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ProfileResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import profile from '../actions/profile.actions';
import { loginRepository } from '../../resources/loginRepository';
import utils from './utils';

function* profilePost() {
  const token = loginRepository.getAccessToken();
  const me: AxiosResponse<ProfileResponse> = token ? yield call(auth.getMe) : null;

  return me?.data || null;
}

const profilePostSaga = utils.bind(null, profile, profilePost);

function* profilePostWatcher() {
  yield takeEvery(profile.pending, profilePostSaga);
}

function* profileSaga() {
  yield profilePostWatcher();
}

export default profileSaga;
