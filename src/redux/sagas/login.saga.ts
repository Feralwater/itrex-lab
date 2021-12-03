import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import login from '../actions/login.actions';
import { SignUpInResponseType } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import { notificationSuccess } from '../actions/notification.actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import runAsyncSaga from './runAsync.saga';

function* loginPost(action: ReturnType<typeof login.pending>) {
  const { payload } = action;
  const response: AxiosResponse<SignUpInResponseType> = yield call(
    auth.SignIn,
    { userName: payload.userName, password: payload.password },
  );

  const { data, status } = response;
  if (data.access_token) {
    loginRepository
      .setAccessToken(data.access_token)
      .setRefreshToken(data.refresh_token);

    yield put(notificationSuccess(createSuccessNotificationMessage(status)));
  }

  return response.data;
}

const loginPostSaga = runAsyncSaga.bind(null, login, loginPost);

function* loginPostWatcher() {
  yield takeEvery(login.pending, loginPostSaga);
}

function* loginSaga() {
  yield loginPostWatcher();
}

export default loginSaga;
