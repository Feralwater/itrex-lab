import { createAction } from '@reduxjs/toolkit';
import { AppointmentFulfilledType, AppointmentPendingType } from './actions.types';

const createSagaActions = <T1 = any, T2 = any, T3 = any>(prefix: string) => ({
  pending: createAction<T1>(`${prefix}/pending`),
  fulfilled: createAction<T2>(`${prefix}/fulfilled`),
  failed: createAction<T3>(`${prefix}/failed`),
});

export const appointment = createSagaActions<AppointmentPendingType, AppointmentFulfilledType>('appointment');

export const appointmentRequest = createAction('appointment/pending');
export const appointmentFulfilled = createAction('appointment/fulfilled');
export const appointmentFailed = createAction('appointment/failed');
