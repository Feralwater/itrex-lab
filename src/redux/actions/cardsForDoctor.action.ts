import { createSagaActions } from './createSaga.actions';
import { AppointmentsForDoctorPending } from './actions.types';
import { CardsForDoctorResponse } from '../../resources/appointments/appointments.types';

export const cardsForDoctor = createSagaActions<AppointmentsForDoctorPending, CardsForDoctorResponse>('cardsForDoctor');
