import React, { useRef } from 'react';
import {
  AppointmentStatus, AppointmentSubTitle, DoctorSpecializationName, UserCardBodyAppointmentConfirm,
} from 'components/AppointmentCard/AppointmentCard.styles';
import { statusColor, statusDescription } from 'components/AppointmentCard/constants';
import { AppointmentCardHeaderProps } from 'components/AppointmentCard/AppointmentCard.types';
import { ChangeStatusModal } from 'components/AppointmentCard/ChangeStatusModal';
import { OpenCloseHandle } from 'components/Modal';

export const AppointmentCardHeader:React.VFC<AppointmentCardHeaderProps> = ({
  status,
  specialization,
  appointmentID,
}) => {
  const modal = useRef<OpenCloseHandle>(null);
  const openModalHandler = () => modal.current?.open();
  return (
    <>
      <AppointmentSubTitle>
        {status
          ? (
            <AppointmentStatus onClick={openModalHandler}>
              <UserCardBodyAppointmentConfirm color={statusColor[status]} />
              <div>{statusDescription[status]}</div>
            </AppointmentStatus>
          )
          : <DoctorSpecializationName>{specialization}</DoctorSpecializationName>}
      </AppointmentSubTitle>
      <ChangeStatusModal
        ref={modal}
        appointmentID={appointmentID}
      />
    </>
  );
};
