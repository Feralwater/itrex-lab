import React from 'react';
import {
  AppointmentStatus, AppointmentSubTitle,
  DoctorSpecializationName,
  UserCardBodyAppointmentConfirm,
} from 'components/AppointmentCard/AppointmentCard.styles';
import { statusColor, statusDescription } from 'components/AppointmentCard/constants';
import { AppointmentCardHeaderProps } from 'components/AppointmentCard/AppointmentCard.types';

export const AppointmentCardHeader:React.VFC<AppointmentCardHeaderProps> = ({
  status,
  specialization,
}) => (
  <AppointmentSubTitle>
    { status
      ? (
        <AppointmentStatus>
          <UserCardBodyAppointmentConfirm color={statusColor[status]} />
          <div>{statusDescription[status]}</div>
        </AppointmentStatus>
      )
      : <DoctorSpecializationName>{specialization}</DoctorSpecializationName>}
  </AppointmentSubTitle>
);
