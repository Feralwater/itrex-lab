import { EditProfileResponse, ProfileResponse } from '../../resources/auth/auth.types';
import { createSagaActions } from './createSaga.actions';

export const profile = createSagaActions<ProfileResponse>('profile');
export const editProfile = createSagaActions<FormData, EditProfileResponse>('editProfile');
export const editPatientProfile = createSagaActions<FormData, ProfileResponse>('editPatientProfile');
