import {
  call, put, takeEvery, select,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage, utils } from './utils';
import { NewProfileResponse } from '../../resources/profile/profile.types';
import { componentsDictionary } from '../../components';
import { notificationSlice } from '../reducers';
import { editProfileSlice } from '../reducers/editProfile.reducer';
import profile from '../../resources/profile/profile.api';
import * as selectors from '../selectors';
import { RoleName } from '../reducers/reducers.types';
import { ROLES } from '../../routes/constants';

function* editProfile(action: ReturnType<typeof editProfileSlice.actions.pending>) {
  try {
    const roleName: RoleName = yield select(selectors.roleName);
    const { payload } = action;
    const response: AxiosResponse<NewProfileResponse> = roleName === ROLES.DOCTOR
      ? yield call(profile.editDoctorProfile, payload)
      : yield call(profile.editPatientProfile, payload);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditProfile));
    return response.data;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const editProfilePatchSaga = utils.bind(null, editProfileSlice.actions, editProfile);

function* editProfilePatchWatcher() {
  yield takeEvery(editProfileSlice.actions.pending, editProfilePatchSaga);
}

function* editProfileSaga() {
  yield editProfilePatchWatcher();
}

export default editProfileSaga;
