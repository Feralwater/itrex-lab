import { AppointmentsForDoctorFulfilled, AppointmentsForDoctorPending } from './actions.types';
import createSagaActions from './createSaga.actions';

const appointmentsForDoctor = createSagaActions<AppointmentsForDoctorPending, AppointmentsForDoctorFulfilled>('appointmentsForDoctor');

export default appointmentsForDoctor;
