import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ProfileResponseType } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import profile from '../actions/profile.actions';
import { loginRepository } from '../../resources/loginRepository';
import runAsyncSaga from './runAsync.saga';

function* profilePost() {
  const token = loginRepository.getAccessToken();
  const me: AxiosResponse<ProfileResponseType> = token ? yield call(auth.getMe) : null;

  return me?.data || null;
}

const profilePostSaga = runAsyncSaga.bind(null, profile, profilePost);

function* profilePostWatcher() {
  yield takeEvery(profile.pending, profilePostSaga);
}

function* profileSaga() {
  yield profilePostWatcher();
}

export default profileSaga;
