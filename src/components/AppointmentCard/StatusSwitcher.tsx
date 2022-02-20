import React, { ChangeEvent } from 'react';
import { AppointmentStatusSwitcher, StatusList } from 'components/AppointmentCard/AppointmentCard.styles';
import { AppointmentStatus } from 'components/AppointmentCard/AppointmentStatus';
import { appointmentsStatuses } from 'components/AppointmentCard/constants';

export interface StatusSwitcherProps{
  activeStatus: string
  changeAppointmentStatus: (event: ChangeEvent<HTMLInputElement>) => void
}

export const StatusSwitcher:React.VFC<StatusSwitcherProps> = ({ activeStatus, changeAppointmentStatus }) => (
  <AppointmentStatusSwitcher>
    <StatusList>
      {appointmentsStatuses.map((status) => (
        <AppointmentStatus
          currentStatus={status.currentStatus}
          activeStatus={activeStatus}
          changeAppointmentStatus={changeAppointmentStatus}
        />
      ))}
    </StatusList>
  </AppointmentStatusSwitcher>
);
