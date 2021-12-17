import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ProfileResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { profile } from '../actions';
import { loginRepository } from '../../resources/loginRepository';
import { utils } from './utils';

function* profileGet() {
  const token = loginRepository.getAccessToken();
  const me: AxiosResponse<ProfileResponse> = token ? yield call(auth.getMe) : null;

  return me?.data || null;
}

const profileGetSaga = utils.bind(null, profile, profileGet);

function* profileGetWatcher() {
  yield takeEvery(profile.pending, profileGetSaga);
}

function* profileSaga() {
  yield profileGetWatcher();
}

export default profileSaga;
