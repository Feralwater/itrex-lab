import { createSagaActions } from './createSaga.actions';
import { ChangePasswordFulfilled, ChangePasswordPending } from './actions.types';

export const changePassword = createSagaActions<ChangePasswordPending, ChangePasswordFulfilled>('changePassword');
