import { createAction } from '@reduxjs/toolkit';
import { LoginFulfilledType, LoginPendingType } from './actions.types';
import { ProfileResponseType } from '../../resources/auth/auth.types';

const createSagaActions = <T1 = any, T2 = any, T3 = any>(prefix: string) => ({
  pending: createAction<T1>(`${prefix}/pending`),
  fulfilled: createAction<T2>(`${prefix}/fulfilled`),
  failed: createAction<T3>(`${prefix}/failed`),
});

export const login = createSagaActions<LoginPendingType, LoginFulfilledType, ProfileResponseType>('login');

export const loginRequest = createAction('login/pending');
export const loginFulfilled = createAction('login/fulfilled');
export const loginFailed = createAction('login/failed');
