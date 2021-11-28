import { createAction } from '@reduxjs/toolkit';
import { ProfileResponseType } from '../../resources/auth/auth.types';

const createSagaActions = <T1 = any, T2 = any, T3 = any>(prefix: string) => ({
  pending: createAction<T1>(`${prefix}/pending`),
  fulfilled: createAction<T2>(`${prefix}/fulfilled`),
  failed: createAction<T3>(`${prefix}/failed`),
});

const profile = createSagaActions<ProfileResponseType>('profile');

export default profile;
