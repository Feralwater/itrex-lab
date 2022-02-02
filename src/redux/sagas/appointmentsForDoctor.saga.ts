import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage, utils } from './utils';
import { notificationError } from '../actions';
import appointments from '../../resources/appointments/appointments.api';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';
import { appointmentsForDoctorSlice } from '../reducers';
import { AppointmentForDoctor, AppointmentsForDoctor } from '../../resources/appointments/appointments.types';

function generateAppointmentForDoctor(resolutionResponse: AxiosResponse<ResolutionsResponse>) {
  return (appointment:AppointmentForDoctor) => ({
    visitDate: appointment.visit_date,
    firstName: appointment.patient.first_name,
    lastName: appointment.patient.last_name,
    photo: appointment.patient.photo,
    appointmentID: appointment.id,
    status: appointment.status,
    resolution: resolutionResponse.data.resolutions.find((resolution) => (resolution.appointment_id === appointment.id)),
  });
}

function generateAppointmentsForDoctor(appointmentsResponse: AxiosResponse<AppointmentsForDoctor>, resolutionResponse: AxiosResponse<ResolutionsResponse>) {
  return {
    appointments: appointmentsResponse.data.appointments.map(generateAppointmentForDoctor(resolutionResponse)),
    total: appointmentsResponse.data.total,
  };
}

function* getAppointmentsForDoctor(action: ReturnType<typeof appointmentsForDoctorSlice.actions.pending>) {
  try {
    const { payload } = action;
    const appointmentsResponse: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.fetchAppointmentsForDoctor, payload.offset, payload.limit);
    const resolutionResponse: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
    return generateAppointmentsForDoctor(appointmentsResponse, resolutionResponse);
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const getAppointmentsForDoctorSaga = utils.bind(null, appointmentsForDoctorSlice.actions, getAppointmentsForDoctor);

function* getAppointmentsForDoctorWatcher() {
  yield takeEvery(appointmentsForDoctorSlice.actions.pending, getAppointmentsForDoctorSaga);
}

function* appointmentsForDoctorSaga() {
  yield getAppointmentsForDoctorWatcher();
}

export default appointmentsForDoctorSaga;
