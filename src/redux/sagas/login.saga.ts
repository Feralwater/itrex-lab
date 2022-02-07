import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { SignUpInResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { loginSlice, notificationSlice } from '../reducers';

function* login({ payload }: ReturnType<typeof loginSlice.actions.pending>) {
  try {
    const { data } : AxiosResponse<SignUpInResponse> = yield call(auth.SignIn, { ...payload });
    if (data.access_token) {
      loginRepository
        .setAccessToken(data.access_token)
        .setRefreshToken(data.refresh_token);
    }
    yield put(loginSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(loginSlice.actions.failed());
  }
}

export function* loginWatcher() {
  yield takeEvery(loginSlice.actions.pending, login);
}
