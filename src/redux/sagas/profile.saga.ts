import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ProfileResponse } from '../../resources/auth/auth.types';
import auth from '../../resources/auth/auth.api';
import { notificationError, profile } from '../actions';
import { loginRepository } from '../../resources/loginRepository';
import { createErrorNotificationMessage, utils } from './utils';

function* profileGet() {
  try {
    const token = loginRepository.getAccessToken();
    const me: AxiosResponse<ProfileResponse> = token ? yield call(auth.getMe) : null;

    return me?.data || null;
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const profileGetSaga = utils.bind(null, profile, profileGet);

function* profileGetWatcher() {
  yield takeEvery(profile.pending, profileGetSaga);
}

function* profileSaga() {
  yield profileGetWatcher();
}

export default profileSaga;
