import { AppointmentFulfilled, AppointmentPending } from './actions.types';
import { createSagaActions } from './createSaga.actions';

export const appointment = createSagaActions<AppointmentPending, AppointmentFulfilled>('appointment');
