import React, { useState } from 'react';
import {
  AppointmentStatus, AppointmentSubTitle, DoctorSpecializationName, UserCardBodyAppointmentConfirm,
} from 'components/AppointmentCard/AppointmentCard.styles';
import { statusColor, statusDescription } from 'components/AppointmentCard/constants';
import { AppointmentCardHeaderProps } from 'components/AppointmentCard/AppointmentCard.types';
import { ChangeStatusModal } from 'components/AppointmentCard/ChangeStatusModal';

export const AppointmentCardHeader:React.VFC<AppointmentCardHeaderProps> = ({
  status,
  specialization,
  appointmentID,
}) => {
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);
  return (
    <>
      <AppointmentSubTitle>
        {status
          ? (
            <AppointmentStatus onClick={() => setOpenModalWindow(true)}>
              <UserCardBodyAppointmentConfirm color={statusColor[status]} />
              <div>{statusDescription[status]}</div>
            </AppointmentStatus>
          )
          : <DoctorSpecializationName>{specialization}</DoctorSpecializationName>}
      </AppointmentSubTitle>
      {openModalWindow && <ChangeStatusModal appointmentID={appointmentID} setOpenModalWindow={setOpenModalWindow} />}
    </>
  );
};
