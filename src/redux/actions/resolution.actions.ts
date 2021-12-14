import {
  EditResolutionFulfilled,
  EditResolutionPending,
  ResolutionFulfilled,
  ResolutionPending, ResolutionsForPatientFulfilled,
  ResolutionsPending,
} from './actions.types';
import { ResolutionsResponse } from '../../resources/resolutions/resolutions.types';
import { createSagaActions } from './createSaga.actions';

export const resolution = createSagaActions<ResolutionPending, ResolutionFulfilled>('resolution');
export const editResolution = createSagaActions<EditResolutionPending, EditResolutionFulfilled>('editResolution');
export const resolutions = createSagaActions<ResolutionsPending, ResolutionsResponse>('resolutions');
export const resolutionsForPatient = createSagaActions<ResolutionsPending, ResolutionsForPatientFulfilled>('resolutionsForPatient');
