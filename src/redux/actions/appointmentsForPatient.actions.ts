import { createSagaActions } from './createSaga.actions';
import { AppointmentsForPatientFulfilled, AppointmentsForPatientPending } from './actions.types';

export const appointmentsForPatient = createSagaActions<AppointmentsForPatientPending, AppointmentsForPatientFulfilled>('appointmentsForPatient');
