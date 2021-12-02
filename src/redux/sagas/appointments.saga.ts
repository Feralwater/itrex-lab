import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { AxiosResponse } from 'axios';
import { AnyFunction, AsyncActionType } from './saga.types';
import { appointment } from '../actions/appointment.actions';
import { NewAppointmentResponse } from '../../resources/appointments/appointments.types';
import appointments from '../../resources/appointments/appointments.api';

function* runAsyncSaga(action: AsyncActionType, saga: AnyFunction, pendingAction?: PayloadActionCreator<any>):any {
  try {
    const result = yield saga(pendingAction);
    yield put(action.fulfilled(result));
  } catch (error:any) {
    const errorSerialized = {
      message: error.message,
      stack: error.stack,
    };
    yield put(action.failed(errorSerialized));
    throw error;
  }
}

function* appointmentPost(action: ReturnType<typeof appointment.pending>) {
  const { payload } = action;
  const response: AxiosResponse<NewAppointmentResponse> = yield call(appointments.addAppointments, {
    date: payload.date,
    reason: payload.reason,
    note: payload.note,
    doctorID: payload.doctorID,
  });

  return { ...response.data };
}

const appointmentPostSaga = runAsyncSaga.bind(null, appointment, appointmentPost);

function* appointmentPostWatcher() {
  yield takeEvery(appointment.pending, appointmentPostSaga);
}

function* appointmentSaga() {
  yield appointmentPostWatcher();
}

export default appointmentSaga;
