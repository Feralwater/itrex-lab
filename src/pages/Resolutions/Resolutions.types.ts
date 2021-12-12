import { Status } from '../../redux/reducers/reducers.types';
import { ResolutionForDoctor, ResolutionForPatient } from '../../resources/resolutions/resolutions.types';

export interface ResolutionRowProps {
  firstName: string
  lastName: string
  resolution: string
  visitDate: string
  nextAppointmentDate: string
}

export type Resolutions = Array<ResolutionForDoctor> | Array<ResolutionForPatient>

export interface ResolutionsProps {
  responseStatus: Status
  myResolutions: Resolutions
}
