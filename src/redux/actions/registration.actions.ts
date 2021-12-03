import { RegistrationFulfilledType, RegistrationPendingType } from './actions.types';
import { ProfileResponseType } from '../../resources/auth/auth.types';
import createSagaActions from './createSaga.actions';

const registration = createSagaActions<RegistrationPendingType, RegistrationFulfilledType, ProfileResponseType>('registration');

export default registration;
