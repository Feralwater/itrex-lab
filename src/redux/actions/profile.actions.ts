import { createAction } from '@reduxjs/toolkit';
import { ProfileResponseType } from '../../resources/auth/auth.types';

const createSagaActions = <T1 = any>(prefix: string) => ({
  me: createAction<T1>(`${prefix}/me`),
});

const profile = createSagaActions<ProfileResponseType>('profile');

export default profile;
