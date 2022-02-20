import React, { ChangeEvent, useState } from 'react';
import {
  AppointmentStatus, AppointmentSubTitle,
  DoctorSpecializationName,
  UserCardBodyAppointmentConfirm,
} from 'components/AppointmentCard/AppointmentCard.styles';
import { statusColor, statusDescription } from 'components/AppointmentCard/constants';
import { AppointmentCardHeaderProps } from 'components/AppointmentCard/AppointmentCard.types';
import { ModalWindow } from 'components/Modal';

export const AppointmentCardHeader:React.VFC<AppointmentCardHeaderProps> = ({
  status,
  specialization,
}) => {
  const [activeAppointmentStatusModal, setActiveAppointmentStatusModal] = useState<boolean>(true);
  const [activeStatus, setActiveStatus] = useState<string>('waiting');
  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setActiveStatus(event.currentTarget.name);
  }
  return (
    <AppointmentSubTitle>
      {status
        ? (
          <>
            <AppointmentStatus>
              <UserCardBodyAppointmentConfirm color={statusColor[status]} />
              <div>{statusDescription[status]}</div>
            </AppointmentStatus>
            <ModalWindow
              activeModal={activeAppointmentStatusModal}
              setActiveModal={setActiveAppointmentStatusModal}
            >
              <div>
                <input
                  type="radio"
                  name="confirmed"
                  checked={activeStatus === 'confirmed'}
                  onChange={changeValue}
                />

                <input
                  type="radio"
                  name="canceled"
                  checked={activeStatus === 'canceled'}
                  onChange={changeValue}
                />

                <input
                  type="radio"
                  name="waiting"
                  checked={activeStatus === 'waiting'}
                  onChange={changeValue}
                />
              </div>
            </ModalWindow>
          </>
        )
        : <DoctorSpecializationName>{specialization}</DoctorSpecializationName>}
    </AppointmentSubTitle>
  );
};
