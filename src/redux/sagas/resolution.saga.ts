import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ResolutionResponse } from 'resources/resolutions/resolutions.types';
import { componentsDictionary } from 'components';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import { appointmentsForDoctorSlice, notificationSlice } from '../reducers';

function* createResolution({ payload }: ReturnType<typeof appointmentsForDoctorSlice.actions.createResolutionPending>) {
  try {
    const { data }: AxiosResponse<ResolutionResponse> = yield call(resolutionsAPI.createResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyCreateResolution));
    yield put(appointmentsForDoctorSlice.actions.createResolutionFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.createResolutionFailed());
  }
}

function* editResolution({ payload }: ReturnType<typeof appointmentsForDoctorSlice.actions.editResolutionPending>) {
  try {
    const { data }: AxiosResponse<string> = yield call(resolutionsAPI.editResolution, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyEditResolution));
    yield put(appointmentsForDoctorSlice.actions.editResolutionFulfilled({ resolutionID: data, resolution: payload.resolution }));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.editResolutionFailed());
  }
}

export function* resolutionWatcher() {
  yield takeLatest(appointmentsForDoctorSlice.actions.createResolutionPending, createResolution);
  yield takeLatest(appointmentsForDoctorSlice.actions.editResolutionPending, editResolution);
}
