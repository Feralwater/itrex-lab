import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { notificationSuccess, changePassword } from '../actions';
import { createSuccessNotificationMessage } from '../../serverResponseDictionary/serverResponsesDictionary';
import utils from './utils';
import { ChangePasswordResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';

function* changePasswordPatch(action: ReturnType<typeof changePassword.pending>) {
  const { payload } = action;
  const response: AxiosResponse<ChangePasswordResponse> = yield call(auth.changePassword, {
    oldPassword: payload.oldPassword,
    newPassword: payload.newPassword,
  });
  yield put(notificationSuccess(createSuccessNotificationMessage(response.status)));
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
