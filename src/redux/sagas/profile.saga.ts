import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, ProfileActionType } from './saga.types';
import { ProfileResponseType } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import profile from '../actions/profile.actions';

function* runAsyncSaga(action: ProfileActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  const result = yield saga(pendingAction);
  yield put(action.me(result));
}

function* profilePost() {
  const me: AxiosResponse<ProfileResponseType> = yield call(auth.getMe);

  return me.data;
}

const profilePostSaga = runAsyncSaga.bind(null, profile, profilePost);

function* profilePostWatcher() {
  yield takeEvery(profile.me, profilePostSaga);
}

function* profileSaga() {
  yield profilePostWatcher();
}

export default profileSaga;
