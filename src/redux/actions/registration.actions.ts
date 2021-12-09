import { RegistrationFulfilled, RegistrationPending } from './actions.types';
import { ProfileResponse } from '../../resources/auth/auth.types';
import createSagaActions from './createSaga.actions';

const registration = createSagaActions<RegistrationPending, RegistrationFulfilled, ProfileResponse>('registration');

export default registration;
