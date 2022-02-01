import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { notificationSuccess, changePassword, notificationError } from '../actions';
import { ChangePasswordResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { componentsDictionary } from '../../components';
import { createErrorNotificationMessage, utils } from './utils';

function* updatePassword(action: ReturnType<typeof changePassword.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ChangePasswordResponse> = yield call(auth.changePassword, { ...payload });
    yield put(notificationSuccess(componentsDictionary.message.successMessageBodyChangePassword));
    return response.data;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const updatePasswordSaga = utils.bind(null, changePassword, updatePassword);

function* changePasswordWatcher() {
  yield takeEvery(changePassword.pending, updatePasswordSaga);
}

function* changePasswordSaga() {
  yield changePasswordWatcher();
}

export default changePasswordSaga;
