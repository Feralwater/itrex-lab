import React, { ChangeEvent, useState } from 'react';
import {
  AppointmentStatus, AppointmentStatusSwitcher, AppointmentSubTitle,
  DoctorSpecializationName, Status, StatusList,
  UserCardBodyAppointmentConfirm,
} from 'components/AppointmentCard/AppointmentCard.styles';
import { statusColor, statusDescription, statuses } from 'components/AppointmentCard/constants';
import { AppointmentCardHeaderProps } from 'components/AppointmentCard/AppointmentCard.types';
import { ModalWindow } from 'components/Modal';
import { ResolutionModalButtons } from 'components/ControlCardPanel';
import { dictionary } from 'pages';
import { selectAppointmentsForDoctor } from 'redux/reducers';
import {
  ResolutionModalBody, ResolutionModalTitle, SelectedPatientImage, SelectedPatientInfo,
} from 'components/ControlCardPanel/ControlCardPanel.styles';
import { componentsDictionary } from 'components/dictionary/componentsDictionary';
import { useAppSelector } from 'hooks';

export const AppointmentCardHeader:React.VFC<AppointmentCardHeaderProps> = ({
  status,
  specialization,
  appointmentID,
}) => {
  const [activeAppointmentStatusModal, setActiveAppointmentStatusModal] = useState<boolean>(true);
  const [activeStatus, setActiveStatus] = useState<string>('waiting');
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const selectedAppointment = appointments.find((appointment) => appointment.appointmentID === appointmentID);
  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    setActiveStatus(event.currentTarget.name);
  }
  const saveAppointmentStatusHandler = () => { };
  const cancelHandler = () => {
    setActiveAppointmentStatusModal(false);
  };
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
              <ResolutionModalBody>
                <ResolutionModalTitle>{componentsDictionary.changeAppointmentStatus.title}</ResolutionModalTitle>
                <SelectedPatientInfo>
                  <SelectedPatientImage
                    src={selectedAppointment?.photo}
                    alt={componentsDictionary.controlCardPanel.selectedPatientImageAlt}
                  />
                  <span>
                    {selectedAppointment?.firstName}
                    {' '}
                    {selectedAppointment?.lastName}
                  </span>
                </SelectedPatientInfo>
                {componentsDictionary.changeAppointmentStatus.subTitle}
                <AppointmentStatusSwitcher>
                  <StatusList>
                    <Status>
                      <label htmlFor={statuses.waiting}>
                        <input
                          type="radio"
                          name={statuses.waiting}
                          checked={activeStatus === statuses.waiting}
                          onChange={changeValue}
                        />
                        {statusDescription[statuses.waiting]}
                      </label>
                    </Status>
                    <Status>
                      <label htmlFor={statuses.confirmed}>
                        <input
                          type="radio"
                          name={statuses.confirmed}
                          checked={activeStatus === statuses.confirmed}
                          onChange={changeValue}
                        />
                        {statusDescription[statuses.confirmed]}
                      </label>
                    </Status>
                    <Status>
                      <label htmlFor={statuses.canceled}>
                        <input
                          type="radio"
                          name={statuses.canceled}
                          checked={activeStatus === statuses.canceled}
                          onChange={changeValue}
                        />
                        {statusDescription[statuses.canceled]}
                      </label>
                    </Status>
                  </StatusList>
                </AppointmentStatusSwitcher>
              </ResolutionModalBody>
              <ResolutionModalButtons
                activeButtonType="button"
                cancelHandler={cancelHandler}
                saveHandler={saveAppointmentStatusHandler}
                passiveButtonText={dictionary.resolutionModal.cancelButtonText}
                activeButtonText={dictionary.resolutionModal.saveButtonText}
                activeButtonIcon="/svg/save-icon.svg"
                passiveButtonIcon="/svg/close-icon.svg"
              />
            </ModalWindow>
          </>
        )
        : <DoctorSpecializationName>{specialization}</DoctorSpecializationName>}
    </AppointmentSubTitle>
  );
};
