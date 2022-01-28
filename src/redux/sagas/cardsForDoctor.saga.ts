import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { createErrorNotificationMessage, utils } from './utils';
import { cardsForDoctor, notificationError } from '../actions';
import { AppointmentsForDoctor } from '../../resources/appointments/appointments.types';
import appointments from '../../resources/appointments/appointments.api';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import resolutionsAPI from '../../resources/resolutions/resolutions.api';

function createCardsForDoctorState(appointmentsResponse: AxiosResponse<AppointmentsForDoctor>, resolutionResponse: AxiosResponse<ResolutionsResponse>) {
  return {
    cards: appointmentsResponse.data.appointments.map((appointment) => ({
      visitDate: appointment.visit_date,
      firstName: appointment.patient.first_name,
      lastName: appointment.patient.last_name,
      photo: appointment.patient.photo,
      appointmentID: appointment.id,
      status: appointment.status,
      resolution: resolutionResponse.data.resolutions.find((resolution) => (resolution.appointment_id === appointment.id)),
    })),
    total: appointmentsResponse.data.total,
  };
}

function* cardsForDoctorGet(action: ReturnType<typeof cardsForDoctor.pending>) {
  try {
    const { payload } = action;
    const appointmentsResponse: AxiosResponse<AppointmentsForDoctor> = yield call(appointments.fetchAppointmentsForDoctor, payload.offset, payload.limit);
    const resolutionResponse: AxiosResponse<ResolutionsResponse> = yield call(resolutionsAPI.fetchResolutions, payload.offset, payload.limit);
    return createCardsForDoctorState(appointmentsResponse, resolutionResponse);
  } catch (error:any) {
    yield put(notificationError(createErrorNotificationMessage(error.response.data)));
    throw error;
  }
}

const cardsForDoctorGetSaga = utils.bind(null, cardsForDoctor, cardsForDoctorGet);

function* cardsForDoctorGetWatcher() {
  yield takeEvery(cardsForDoctor.pending, cardsForDoctorGetSaga);
}

function* cardsForDoctorSaga() {
  yield cardsForDoctorGetWatcher();
}

export default cardsForDoctorSaga;
