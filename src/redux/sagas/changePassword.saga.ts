import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ChangePasswordResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { componentsDictionary } from '../../components';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { changePasswordSlice } from '../reducers/changePassword.reducer';
import { notificationSlice } from '../reducers';

function* updatePassword({ payload }: ReturnType<typeof changePasswordSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ChangePasswordResponse> = yield call(auth.changePassword, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyChangePassword));
    yield put(changePasswordSlice.actions.fulfilled(data[0]));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(changePasswordSlice.actions.failed());
  }
}

function* changePasswordWatcher() {
  yield takeEvery(changePasswordSlice.actions.pending, updatePassword);
}

function* changePasswordSaga() {
  yield changePasswordWatcher();
}

export default changePasswordSaga;
