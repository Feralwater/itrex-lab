import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { SignUpInResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import { createErrorNotificationMessage, utils } from './utils';
import { notificationSlice, registrationSlice } from '../reducers';

function* registrationPost(action: ReturnType<typeof registrationSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<SignUpInResponse> = yield call(auth.SignUp, { ...payload });

    const { data } = response;

    if (data.access_token) {
      loginRepository
        .setAccessToken(data.access_token)
        .setRefreshToken(data.refresh_token);
    }

    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const registrationPostSaga = utils.bind(null, registrationSlice.actions, registrationPost);

function* registrationPostWatcher() {
  yield takeEvery(registrationSlice.actions.pending, registrationPostSaga);
}

function* registrationSaga() {
  yield registrationPostWatcher();
}

export default registrationSaga;
