import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ResolutionsResponse } from 'resources/resolutions/resolutions.types';
import {
  AppointmentForDoctor,
  AppointmentsForDoctor,
  AppointmentsForPatient,
} from 'resources/appointments/appointments.types';
import { cacheUserPhotos } from 'redux/sagas/utils/cacheUserPhoto';
import { createErrorNotificationMessage } from './utils/createErrorNotificationMessage';
import appointments from '../../resources/appointments/appointments.api';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { appointmentsForDoctorSlice, appointmentsForPatientSlice, notificationSlice } from '../reducers';

function generateAppointmentForDoctor(resolutionResponse: ResolutionsResponse, usersPhotoArray:string[]) {
  return (appointment:AppointmentForDoctor, index:number) => ({
    visitDate: appointment.visit_date,
    firstName: appointment.patient.first_name,
    lastName: appointment.patient.last_name,
    photo: usersPhotoArray[index],
    appointmentID: appointment.id,
    appointmentStatus: appointment.status,
    resolution: resolutionResponse.resolutions.find((resolution) => (resolution.appointment_id === appointment.id)),
  });
}

function generateAppointmentsForDoctor(appointmentsResponse: AppointmentsForDoctor, resolutionResponse: ResolutionsResponse, usersPhotoArray:string[]) {
  return {
    appointments: appointmentsResponse.appointments.map(generateAppointmentForDoctor(resolutionResponse, usersPhotoArray)),
    total: appointmentsResponse.total,
  };
}

function* fetchAppointmentsForDoctor({ payload }: ReturnType<typeof appointmentsForDoctorSlice.actions.pending>) {
  try {
    const { data: appointmentsResponse }: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.fetchAppointmentsForDoctor, payload.offset, payload.limit);
    const srcArray = appointmentsResponse.appointments.map((appointment) => appointment.patient.photo);
    const usersPhotoArray: string[] = yield call(cacheUserPhotos, srcArray);
    const { data: resolutionResponse }: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutionsForDoctor, payload.offset, payload.limit);
    const appointmentsForDoctor = generateAppointmentsForDoctor(appointmentsResponse, resolutionResponse, usersPhotoArray);
    yield put(appointmentsForDoctorSlice.actions.fulfilled(appointmentsForDoctor));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.failed());
  }
}

function* fetchAppointmentsForPatient({ payload }: ReturnType<typeof appointmentsForPatientSlice.actions.pending>) {
  try {
    const { data }: AxiosResponse<AppointmentsForPatient> = yield call(appointments.fetchAppointmentsForPatient, payload.offset, payload.limit);
    yield put(appointmentsForPatientSlice.actions.fulfilled(data));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForPatientSlice.actions.failed());
  }
}

export function* fetchAppointmentsWatcher() {
  yield takeEvery(appointmentsForDoctorSlice.actions.pending, fetchAppointmentsForDoctor);
  yield takeEvery(appointmentsForPatientSlice.actions.pending, fetchAppointmentsForPatient);
}
