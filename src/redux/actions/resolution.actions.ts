import { ResolutionFulfilled, ResolutionPending, ResolutionsPending } from './actions.types';
import createSagaActions from './createSaga.actions';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';

export const resolution = createSagaActions<ResolutionPending, ResolutionFulfilled>('resolution');
export const resolutions = createSagaActions<ResolutionsPending, ResolutionsResponse>('resolutions');
