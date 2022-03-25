import { Status } from 'redux/reducers/reducers.types';
import { ReactElement } from 'react';

export interface MainPage {
  appointmentsLength: number
  responseStatus: Status
  fullState: ReactElement
  emptyState: ReactElement
  isMoreAppointments: boolean
}
