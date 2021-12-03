import { appointmentsForDoctorFulfilled, appointmentsForDoctorPending } from './actions.types';
import createSagaActions from './createSaga.actions';

const appointmentsForDoctor = createSagaActions<appointmentsForDoctorPending, appointmentsForDoctorFulfilled>('appointmentsForDoctor');

export default appointmentsForDoctor;
