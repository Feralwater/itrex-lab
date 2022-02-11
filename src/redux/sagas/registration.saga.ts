import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { SignUpInResponse } from 'resources/auth/auth.types';
import { loginRepository } from 'resources/loginRepository';
import auth from '../../resources/auth/auth.api';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { notificationSlice, registrationSlice } from '../reducers';

function* registration({ payload }: ReturnType<typeof registrationSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<SignUpInResponse> = yield call(auth.SignUp, { ...payload });
    if (data.access_token) {
      loginRepository
        .setAccessToken(data.access_token)
        .setRefreshToken(data.refresh_token);
    }
    yield put(registrationSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(registrationSlice.actions.failed());
  }
}

export function* registrationWatcher() {
  yield takeEvery(registrationSlice.actions.pending, registration);
}
