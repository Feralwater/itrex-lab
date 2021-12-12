import { createAction } from '@reduxjs/toolkit';
import { EditProfileResponse, ProfileResponse } from '../../resources/auth/auth.types';
import { EditProfilePending } from './actions.types';

const createSagaActions = <T1 = any, T2 = any, T3 = any>(prefix: string) => ({
  pending: createAction<T1>(`${prefix}/pending`),
  fulfilled: createAction<T2>(`${prefix}/fulfilled`),
  failed: createAction<T3>(`${prefix}/failed`),
});

export const profile = createSagaActions<ProfileResponse>('profile');
export const editProfile = createSagaActions<EditProfilePending, EditProfileResponse>('editProfile');
