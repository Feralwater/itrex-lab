import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { notificationSuccess, changePassword } from '../actions';
import utils from './utils';
import { ChangePasswordResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { componentsDictionary } from '../../components';

function* changePasswordPatch(action: ReturnType<typeof changePassword.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ChangePasswordResponse> = yield call(auth.changePassword, { ...payload });
  yield put(notificationSuccess(componentsDictionary.message.successMessageBodyChangePassword));
  return response.data;
}

const changePasswordPatchSaga = utils.bind(null, changePassword, changePasswordPatch);

function* changePasswordWatcher() {
  yield takeEvery(changePassword.pending, changePasswordPatchSaga);
}

function* changePasswordSaga() {
  yield changePasswordWatcher();
}

export default changePasswordSaga;
