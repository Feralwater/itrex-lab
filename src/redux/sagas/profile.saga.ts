import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from './saga.types';
import { ProfileResponseType } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import profile from '../actions/profile.actions';
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
