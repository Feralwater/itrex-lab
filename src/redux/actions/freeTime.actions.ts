import { createSagaActions } from './createSaga.actions';
import { FreeTimeResponse } from '../../resources/appointments/appointments.types';
import { FreeTimePending } from './actions.types';

export const freeDoctorTime = createSagaActions<FreeTimePending, FreeTimeResponse>('freeDoctorTime');
