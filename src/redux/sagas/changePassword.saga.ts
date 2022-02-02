import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { notificationSuccess, notificationError } from '../actions';
import { ChangePasswordResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { componentsDictionary } from '../../components';
import { createErrorNotificationMessage, utils } from './utils';
import { changePasswordSlice } from '../reducers/changePassword.reducer';

function* updatePassword(action: ReturnType<typeof changePasswordSlice.actions.pending>) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ChangePasswordResponse> = yield call(auth.changePassword, { ...payload });
    yield put(notificationSuccess(componentsDictionary.message.successMessageBodyChangePassword));
    return response.data[0];
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const updatePasswordSaga = utils.bind(null, changePasswordSlice.actions, updatePassword);

function* changePasswordWatcher() {
  yield takeEvery(changePasswordSlice.actions.pending, updatePasswordSaga);
}

function* changePasswordSaga() {
  yield changePasswordWatcher();
}

export default changePasswordSaga;
