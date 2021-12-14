import { EditProfileResponse, ProfileResponse } from '../../resources/auth/auth.types';
import { EditProfilePending } from './actions.types';
import { createSagaActions } from './createSaga.actions';

export const profile = createSagaActions<ProfileResponse>('profile');
export const editProfile = createSagaActions<EditProfilePending, EditProfileResponse>('editProfile');
