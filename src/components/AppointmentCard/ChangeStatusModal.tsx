import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import { useAppDispatch } from 'hooks';
import { statuses } from 'components/AppointmentCard/constants';
import { appointmentsForDoctorSlice } from 'redux/reducers';
import { ModalWindow } from 'components/Modal';
import { ResolutionModalBody, ResolutionModalTitle } from 'components/ControlCardPanel/ControlCardPanel.styles';
import { componentsDictionary } from 'components/dictionary/componentsDictionary';
import { AppointmentStatusSwitcher, StatusList } from 'components/AppointmentCard/AppointmentCard.styles';
import { ResolutionModalButtons } from 'components/ControlCardPanel';
import { dictionary } from 'pages';
import { AppointmentStatus } from 'components/AppointmentCard/AppointmentStatus';
import { PatientInfo, PatientInfoProps } from './PatientInfo';

interface ChangeStatusModalProps extends PatientInfoProps {
  setOpenModalWindow: Dispatch<SetStateAction<boolean>>;
}

export const ChangeStatusModal: React.VFC<ChangeStatusModalProps> = (
  { appointmentID, setOpenModalWindow },
) => {
  const dispatch = useAppDispatch();
  const [activeAppointmentStatusModal, setActiveAppointmentStatusModal] = useState<boolean>(true);
  const [activeStatus, setActiveStatus] = useState<string>(statuses.waiting);

  const changeAppointmentStatus = (event: ChangeEvent<HTMLInputElement>) => setActiveStatus(event.currentTarget.value);
  const saveAppointmentStatusHandler = () => {
    dispatch(appointmentsForDoctorSlice.actions.updateStatusPending({
      id: appointmentID,
      status: activeStatus,
    }));
    setActiveAppointmentStatusModal(false);
    setOpenModalWindow(false);
  };
  const cancelHandler = () => {
    setActiveAppointmentStatusModal(false);
    setOpenModalWindow(false);
  };

  return (
    <ModalWindow
      activeModal={activeAppointmentStatusModal}
      setActiveModal={setActiveAppointmentStatusModal}
    >
      <ResolutionModalBody>
        <ResolutionModalTitle>{componentsDictionary.changeAppointmentStatus.title}</ResolutionModalTitle>
        <PatientInfo appointmentID={appointmentID} />
        {componentsDictionary.changeAppointmentStatus.subTitle}
        <AppointmentStatusSwitcher>
          <StatusList>
            <AppointmentStatus
              currentStatus={statuses.waiting}
              activeStatus={activeStatus}
              changeAppointmentStatus={changeAppointmentStatus}
            />
            <AppointmentStatus
              currentStatus={statuses.confirmed}
              activeStatus={activeStatus}
              changeAppointmentStatus={changeAppointmentStatus}
            />
            <AppointmentStatus
              currentStatus={statuses.canceled}
              activeStatus={activeStatus}
              changeAppointmentStatus={changeAppointmentStatus}
            />
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
  );
};
