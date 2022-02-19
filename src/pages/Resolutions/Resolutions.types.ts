import { Status } from '../../redux/reducers/reducers.types';
import { ResolutionForDoctor, ResolutionForPatient } from '../../resources/resolutions/resolutions.types';

export interface ResolutionRowProps {
  firstName?: string;
  lastName?: string;
  resolution: string;
  visitDate: string;
  nextAppointmentDate: string;
}

export interface ResolutionsProps {
  responseStatus: Status;
  myResolutions: Array<ResolutionForPatient> | Array<ResolutionForDoctor>
  role: 'Doctor' | 'Patient'
}

export interface ResolutionsPaginateProps{
  totalCount: number
  handleClick: (currentPageNumber: { selected: number })=>void
}
