import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { FreeTimeResponse, NewAppointmentResponse } from 'resources/appointments/appointments.types';
import { componentsDictionary } from 'components';
import { DoctorsBySpecializationIdResponse } from 'resources/doctors/doctors.types';
import { OccupationsResponse } from 'resources/occupations/occupations.types';
import appointments from '../../resources/appointments/appointments.api';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import {
  appointmentsForDoctorSlice,
  freeDoctorTimeSlice,
  getDoctorsByIDSlice,
  makeAppointmentSlice,
  notificationSlice,
  occupationsSlice,
} from '../reducers';
import doctors from '../../resources/doctors/doctors.api';
import occupationsAPI from '../../resources/occupations/occupations.api';

function* createAppointment({ payload }: ReturnType<typeof makeAppointmentSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<NewAppointmentResponse> = yield call(appointments.addAppointment, { ...payload });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyMakeAppointment));
    yield put(makeAppointmentSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(makeAppointmentSlice.actions.failed());
  }
}

function* getDoctorsByID({ payload }: ReturnType<typeof getDoctorsByIDSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<DoctorsBySpecializationIdResponse> = yield call(doctors.fetchDoctorsBySpecializationId, payload);
    yield put(getDoctorsByIDSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(getDoctorsByIDSlice.actions.failed());
  }
}

function* getFreeDoctorTime({ payload }: ReturnType<typeof freeDoctorTimeSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<FreeTimeResponse> = yield call(appointments.fetchFreeTime, payload.date, payload.doctorID);
    yield put(freeDoctorTimeSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(freeDoctorTimeSlice.actions.failed());
  }
}

function* getOccupations() {
  try {
    const { data }: AxiosResponse<OccupationsResponse> = yield call(occupationsAPI.fetchOccupations);
    yield put(occupationsSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(occupationsSlice.actions.failed());
  }
}

function* deleteAppointment({ payload } : ReturnType<typeof appointmentsForDoctorSlice.actions.deleteAppointmentPending>) {
  try {
    const { data } : AxiosResponse<string> = yield call(appointments.deleteAppointment, payload.id);
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyDeleteAppointment));
    yield put(appointmentsForDoctorSlice.actions.deleteAppointmentFulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.deleteAppointmentFailed());
  }
}

function* updateAppointmentStatus({ payload } : ReturnType<typeof appointmentsForDoctorSlice.actions.updateStatusPending>) {
  try {
    const { data } : AxiosResponse<string> = yield call(appointments.updateAppointmentStatus, payload.id, { status: payload.status });
    yield put(notificationSlice.actions.notificationSuccess(componentsDictionary.message.successMessageBodyUpdateAppointmentStatus));
    yield put(appointmentsForDoctorSlice.actions.updateStatusFulfilled({ editedAppointmentID: data, status: payload.status }));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.updateStatusFailed());
  }
}

export function* appointmentWatcher() {
  yield takeEvery(makeAppointmentSlice.actions.pending, createAppointment);
  yield takeEvery(getDoctorsByIDSlice.actions.pending, getDoctorsByID);
  yield takeEvery(freeDoctorTimeSlice.actions.pending, getFreeDoctorTime);
  yield takeEvery(occupationsSlice.actions.pending, getOccupations);
  yield takeEvery(appointmentsForDoctorSlice.actions.deleteAppointmentPending, deleteAppointment);
  yield takeEvery(appointmentsForDoctorSlice.actions.updateStatusPending, updateAppointmentStatus);
}
