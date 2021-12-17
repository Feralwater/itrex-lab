import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { notificationError, registration } from '../actions';
import { ProfileResponse, SignUpInResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import { createErrorNotificationMessage, utils } from './utils';

function* registrationPost(action: ReturnType<typeof registration.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<SignUpInResponse> = yield call(auth.SignUp, { ...payload });

    const { data } = response;

    if (data.access_token) {
      loginRepository
        .setAccessToken(data.access_token)
        .setRefreshToken(data.refresh_token);
    }

    const profile: AxiosResponse<ProfileResponse> = yield call(auth.getMe);

    return { ...response.data, ...profile.data };
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const registrationPostSaga = utils.bind(null, registration, registrationPost);

function* registrationPostWatcher() {
  yield takeEvery(registration.pending, registrationPostSaga);
}

function* registrationSaga() {
  yield registrationPostWatcher();
}

export default registrationSaga;
