import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from './saga.types';
import { registration } from '../actions/registration.actions';
import { ProfileResponseType, SignUpInResponseType } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.fulfilled(result));
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    throw error;
  }
}

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
