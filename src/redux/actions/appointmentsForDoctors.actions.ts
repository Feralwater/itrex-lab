import {
  AppointmentsForDoctorFulfilled,
  AppointmentsForDoctorPending, DeleteAppointmentFulfilled,
  DeleteAppointmentPending,
} from './actions.types';
import createSagaActions from './createSaga.actions';

export const appointmentsForDoctor = createSagaActions<AppointmentsForDoctorPending, AppointmentsForDoctorFulfilled>('appointmentsForDoctor');
export const deleteAppointment = createSagaActions<DeleteAppointmentPending, DeleteAppointmentFulfilled>('deleteAppointment');
