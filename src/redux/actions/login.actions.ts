import { LoginFulfilledType, LoginPendingType } from './actions.types';
import { ProfileResponseType } from '../../resources/auth/auth.types';
import createSagaActions from './createSaga.actions';

const login = createSagaActions<LoginPendingType, LoginFulfilledType, ProfileResponseType>('login');

export default login;
