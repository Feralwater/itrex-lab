import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ProfileResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { loginRepository } from '../../resources/loginRepository';
import { createErrorNotificationMessage, utils } from './utils';
import { notificationSlice, profileSlice } from '../reducers';

function* getProfile() {
  try {
    const token = loginRepository.getAccessToken();
    const me: AxiosResponse<ProfileResponse> = token ? yield call(auth.getMe) : null;

    return me?.data || null;
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getProfileSaga = utils.bind(null, profileSlice.actions, getProfile);

function* getProfileWatcher() {
  yield takeEvery(profileSlice.actions.pending, getProfileSaga);
}

function* profileSaga() {
  yield getProfileWatcher();
}

export default profileSaga;
