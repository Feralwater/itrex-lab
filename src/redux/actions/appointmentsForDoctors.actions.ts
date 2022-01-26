import { DeleteAppointmentFulfilled, DeleteAppointmentPending } from './actions.types';
import { createSagaActions } from './createSaga.actions';

export const deleteAppointment = createSagaActions<DeleteAppointmentPending, DeleteAppointmentFulfilled>('deleteAppointment');
