import React from 'react';
import {
  AppointmentStatus,
  DoctorSpecializationName,
  UserCardBodyAppointmentConfirm,
} from 'components/AppointmentCard/AppointmentCard.styles';
import { statusColor, statusDescription } from 'components/AppointmentCard/constants';
import { AppointmentCardHeaderProps } from 'components/AppointmentCard/AppointmentCard.types';

export const AppointmentCardHeader:React.VFC<AppointmentCardHeaderProps> = ({
  status,
  specialization,
}) => (
  <AppointmentStatus>
    { status
      ? (
        <>
          <UserCardBodyAppointmentConfirm color={statusColor[status]} />
          <div>{statusDescription[status]}</div>
        </>
      )
      : <DoctorSpecializationName>{specialization}</DoctorSpecializationName>}
  </AppointmentStatus>
);
