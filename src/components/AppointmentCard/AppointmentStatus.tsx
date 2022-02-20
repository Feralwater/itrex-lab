import React, { ChangeEvent } from 'react';
import { Status } from 'components/AppointmentCard/AppointmentCard.styles';
import { statusDescription } from 'components/AppointmentCard/constants';

interface AppointmentStatusProps {
  currentStatus: string
  activeStatus: string
  changeAppointmentStatus: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AppointmentStatus: React.VFC<AppointmentStatusProps> = (
  { currentStatus, activeStatus, changeAppointmentStatus },
) => (
  <Status>
    <label htmlFor={currentStatus}>
      <input
        type="radio"
        name={currentStatus}
        value={currentStatus}
        id={currentStatus}
        checked={activeStatus === currentStatus}
        onChange={changeAppointmentStatus}
      />
      {statusDescription[currentStatus]}
    </label>
  </Status>
);
