import { call, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { registration } from '../actions/registration.actions';
import { ProfileResponseType, SignUpInResponseType } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import runAsyncSaga from './runAsync.saga';

function* registrationPost(action: ReturnType<typeof registration.pending>) {
  const { payload } = action;
  const response: AxiosResponse<SignUpInResponseType> = yield call(
    auth.SignUp,
    {
      userName: payload.userName,
      password: payload.password,
      firstName: payload.firstName,
      lastName: payload.lastName,
    },
  );

  const { data } = response;

  if (data.access_token) {
    loginRepository
      .setAccessToken(data.access_token)
      .setRefreshToken(data.refresh_token);
  }

  const profile: AxiosResponse<ProfileResponseType> = yield call(auth.getMe);

  return { ...response.data, ...profile.data };
}

const registrationPostSaga = runAsyncSaga.bind(null, registration, registrationPost);

function* registrationPostWatcher() {
  yield takeEvery(registration.pending, registrationPostSaga);
}

function* registrationSaga() {
  yield registrationPostWatcher();
}

export default registrationSaga;
