import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from './saga.types';
import { login } from './actions/login.actions';
import { ProfileResponseType, SignUpInResponseType } from '../resources/auth/auth.types';
import auth from '../resources/auth/auth.api';
import { loginRepository } from '../resources/loginRepository';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.fulfilled(result));
    yield put(action.me(result));
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    throw error;
  }
}

function* loginPost(action: ReturnType<typeof login.pending>) {
  const { payload } = action;
  const response: AxiosResponse<SignUpInResponseType> = yield call(
    auth.SignIn,
    { userName: payload.userName, password: payload.password },
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

const loginPostSaga = runAsyncSaga.bind(null, login, loginPost);

function* loginPostWatcher() {
  yield takeEvery(login.pending, loginPostSaga);
}

function* loginSaga() {
  yield loginPostWatcher();
}

export default loginSaga;
