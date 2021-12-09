import { LoginFulfilled, LoginPending } from './actions.types';
import { ProfileResponse } from '../../resources/auth/auth.types';
import createSagaActions from './createSaga.actions';

const login = createSagaActions<LoginPending, LoginFulfilled, ProfileResponse>('login');

export default login;
