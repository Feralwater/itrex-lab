import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage } from './utils';
import appointments from '../../resources/appointments/appointments.api';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { appointmentsForDoctorSlice, notificationSlice } from '../reducers';
import { AppointmentForDoctor, AppointmentsForDoctor } from '../../resources/appointments/appointments.types';

function generateAppointmentForDoctor(resolutionResponse: ResolutionsResponse) {
  return (appointment:AppointmentForDoctor) => ({
    visitDate: appointment.visit_date,
    firstName: appointment.patient.first_name,
    lastName: appointment.patient.last_name,
    photo: appointment.patient.photo,
    appointmentID: appointment.id,
    appointmentStatus: appointment.status,
    resolution: resolutionResponse.resolutions.find((resolution) => (resolution.appointment_id === appointment.id)),
  });
}

function generateAppointmentsForDoctor(appointmentsResponse: AppointmentsForDoctor, resolutionResponse: ResolutionsResponse) {
  return {
    appointments: appointmentsResponse.appointments.map(generateAppointmentForDoctor(resolutionResponse)),
    total: appointmentsResponse.total,
  };
}

function* getAppointmentsForDoctor({ payload }: ReturnType<typeof appointmentsForDoctorSlice.actions.pending>) {
  try {
    const { data: appointmentsResponse }: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.fetchAppointmentsForDoctor, payload.offset, payload.limit);
    const { data: resolutionResponse }: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
    const appointmentsForDoctor = generateAppointmentsForDoctor(appointmentsResponse, resolutionResponse);
    yield put(appointmentsForDoctorSlice.actions.fulfilled(appointmentsForDoctor));
  } catch (error:any) {
    yield put(notificationSlice.actions.notificationError(createErrorNotificationMessage(error.response.data)));
    yield put(appointmentsForDoctorSlice.actions.failed());
  }
}

function* getAppointmentsForDoctorWatcher() {
  yield takeEvery(appointmentsForDoctorSlice.actions.pending, getAppointmentsForDoctor);
}

function* appointmentsForDoctorSaga() {
  yield getAppointmentsForDoctorWatcher();
}

export default appointmentsForDoctorSaga;
