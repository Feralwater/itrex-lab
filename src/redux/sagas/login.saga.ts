import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { login, notificationError } from '../actions';
import { SignUpInResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import { createErrorNotificationMessage, utils } from './utils';

function* loginPost(action: ReturnType<typeof login.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<SignUpInResponse> = yield call(auth.SignIn, { ...payload });

    const { data } = response;
    if (data.access_token) {
      loginRepository
        .setAccessToken(data.access_token)
        .setRefreshToken(data.refresh_token);
    }

    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const loginPostSaga = utils.bind(null, login, loginPost);

function* loginPostWatcher() {
  yield takeEvery(login.pending, loginPostSaga);
}

function* loginSaga() {
  yield loginPostWatcher();
}

export default loginSaga;
