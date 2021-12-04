import { ResolutionFulfilled, ResolutionPending } from './actions.types';
import createSagaActions from './createSaga.actions';

const resolution = createSagaActions<ResolutionPending, ResolutionFulfilled>('resolution');

export default resolution;
