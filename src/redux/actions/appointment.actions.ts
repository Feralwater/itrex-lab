import { AppointmentFulfilledType, AppointmentPendingType } from './actions.types';
import createSagaActions from './createSaga.actions';

export const appointment = createSagaActions<AppointmentPendingType, AppointmentFulfilledType>('appointment');

export default appointment;
