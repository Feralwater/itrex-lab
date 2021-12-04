import createSagaActions from './createSaga.actions';
import { DeleteAppointmentFulfilled, DeleteAppointmentPending } from './actions.types';

const deleteAppointment = createSagaActions<DeleteAppointmentPending, DeleteAppointmentFulfilled>('deleteAppointment');

export default deleteAppointment;
