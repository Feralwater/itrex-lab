import { createSagaActions } from './createSaga.actions';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';

export const doctorsByID = createSagaActions<string, DoctorsBySpecializationIdResponse>('doctorsByID');
