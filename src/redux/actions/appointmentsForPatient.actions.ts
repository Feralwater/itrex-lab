import createSagaActions from './createSaga.actions';
import { AppointmentsForPatientFulfilled, AppointmentsForPatientPending } from './actions.types';

const appointmentsForPatient = createSagaActions<AppointmentsForPatientPending, AppointmentsForPatientFulfilled>('appointmentsForPatient');

export default appointmentsForPatient;
