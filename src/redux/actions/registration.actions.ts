import { createAction } from '@reduxjs/toolkit';
import { RegistrationFulfilledType, RegistrationPendingType } from './actions.types';
import { ProfileResponseType } from '../../resources/auth/auth.types';

const createSagaActions = <T1 = any, T2 = any, T3 = any>(prefix: string) => ({
  pending: createAction<T1>(`${prefix}/pending`),
  fulfilled: createAction<T2>(`${prefix}/fulfilled`),
  failed: createAction<T3>(`${prefix}/failed`),
});

export const registration = createSagaActions<RegistrationPendingType, RegistrationFulfilledType, ProfileResponseType>('registration');

export const registrationRequest = createAction('registration/pending');
export const registrationFulfilled = createAction('registration/fulfilled');
export const registrationFailed = createAction('registration/failed');
