import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ChangePasswordResponse, EditProfileResponse, ProfileResponse } from 'resources/auth/auth.types';
import { loginRepository } from 'resources/loginRepository';
import { ROLES } from 'routes/constants';
import { componentsDictionary } from 'components';
import { createErrorNotificationMessage } from 'redux/sagas/utils/createErrorNotificationMessage';
import auth from '../../resources/auth/auth.api';
import { notificationSlice, profileSlice } from '../reducers';
import { RoleName } from '../reducers/reducers.types';
import * as selectors from '../selectors';
import profile from '../../resources/profile/profile.api';
import { changePasswordSlice } from '../reducers/changePassword.reducer';

function* getProfile() {
  try {
    const token = loginRepository.getAccessToken();
    const me : AxiosResponse<ProfileResponse> = token ? yield call(auth.getMe) : null;
    yield put(profileSlice.actions.fulfilled(me?.data || null));
  } catch (error:any) {
    yield put(profileSlice.actions.failed());
  }
}

function* editProfile({ payload }: ReturnType<typeof profileSlice.actions.editProfilePending>) {
  try {
    const roleName: RoleName = yield select(selectors.roleName);
    const { data }: AxiosResponse<EditProfileResponse> = roleName === ROLES.DOCTOR
      ? yield call(profile.editDoctorProfile, payload)
      : yield call(profile.editPatientProfile, payload);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditProfile));
    yield put(profileSlice.actions.editProfileFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(componentsDictionary.message.errorMessageEditProfile)));
    yield put(profileSlice.actions.editProfileFailed());
  }
}

function* changePassword({ payload }: ReturnType<typeof changePasswordSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<ChangePasswordResponse> = yield call(auth.changePassword, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyChangePassword));
    yield put(changePasswordSlice.actions.fulfilled(data[0]));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(changePasswordSlice.actions.failed());
  }
}

export function* profileWatcher() {
  yield takeEvery(profileSlice.actions.pending, getProfile);
  yield takeEvery(profileSlice.actions.editProfilePending, editProfile);
  yield takeEvery(changePasswordSlice.actions.pending, changePassword);
}
