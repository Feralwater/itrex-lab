import { RegistrationFulfilled, RegistrationPending } from './actions.types';
import { ProfileResponse } from '../../resources/auth/auth.types';
import { createSagaActions } from './createSaga.actions';

export const registration = createSagaActions<RegistrationPending, RegistrationFulfilled, ProfileResponse>('registration');
