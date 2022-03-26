import { Status } from 'redux/reducers/reducers.types';
import { ResolutionForDoctor, ResolutionForPatient } from 'resources/resolutions/resolutions.types';

export interface ResolutionRowProps {
  firstName?: string;
  lastName?: string;
  resolution: string;
  visitDate: string;
  nextAppointmentDate: string;
}

export interface ResolutionsPaginateProps {
  fromItem: number
  toItem: number
  totalResolutionsCount: number
  handleClick: (current: { selected: number; }) => void
  pagesCount: number
  currentPageNumber: string | number
}

export interface ResolutionsProps extends ResolutionsPaginateProps {
  responseStatus: Status;
  myResolutions: Array<ResolutionForPatient> | Array<ResolutionForDoctor>
}
