import {
  call, put, takeEvery, select,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';
import { editProfileSlice } from '../reducers/editProfile.reducer';
import profile from '../../resources/profile/profile.api';
import * as selectors from '../selectors';
import { RoleName } from '../reducers/reducers.types';
import { ROLES } from '../../routes/constants';
import { EditProfileResponse } from '../../resources/auth/auth.types';

function* editProfile({ payload }: ReturnType<typeof editProfileSlice.actions.pending>) {
  try {
    const roleName: RoleName = yield select(selectors.roleName);
    const { data }: AxiosResponse<EditProfileResponse> = roleName === ROLES.DOCTOR
      ? yield call(profile.editDoctorProfile, payload)
      : yield call(profile.editPatientProfile, payload);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditProfile));
    yield put(editProfileSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.message)));
    yield put(editProfileSlice.actions.failed());
  }
}

function* editProfilePatchWatcher() {
  yield takeEvery(editProfileSlice.actions.pending, editProfile);
}

function* editProfileSaga() {
  yield editProfilePatchWatcher();
}

export default editProfileSaga;
