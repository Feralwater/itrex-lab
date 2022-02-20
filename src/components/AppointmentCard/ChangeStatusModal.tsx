import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import { useAppDispatch } from 'hooks';
import { statusDescription, statuses } from 'components/AppointmentCard/constants';
import { appointmentsForDoctorSlice } from 'redux/reducers';
import { ModalWindow } from 'components/Modal';
import { ResolutionModalBody, ResolutionModalTitle } from 'components/ControlCardPanel/ControlCardPanel.styles';
import { componentsDictionary } from 'components/dictionary/componentsDictionary';
import { AppointmentStatusSwitcher, Status, StatusList } from 'components/AppointmentCard/AppointmentCard.styles';
import { ResolutionModalButtons } from 'components/ControlCardPanel';
import { dictionary } from 'pages';
import { PatientInfo, PatientInfoProps } from './PatientInfo';

interface ChangeStatusModalProps extends PatientInfoProps{
  setOpenModalWindow: Dispatch<SetStateAction<boolean>>;
}

function getStatus(activeStatus: string, changeAppointmentStatus: (event: React.ChangeEvent<HTMLInputElement>) => void) {
  return (
    <Status>
      <label htmlFor={statuses.waiting}>
        <input
          type="radio"
          name={statuses.waiting}
          value={statuses.waiting}
          id={statuses.waiting}
          checked={activeStatus === statuses.waiting}
          onChange={changeAppointmentStatus}
        />
        {statusDescription[statuses.waiting]}
      </label>
    </Status>
  );
}

export const ChangeStatusModal:React.VFC<ChangeStatusModalProps> = (
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
            {getStatus(activeStatus, changeAppointmentStatus)}
            <Status>
              <label htmlFor={statuses.confirmed}>
                <input
                  type="radio"
                  name={statuses.confirmed}
                  value={statuses.confirmed}
                  id={statuses.confirmed}
                  checked={activeStatus === statuses.confirmed}
                  onChange={changeAppointmentStatus}
                />
                {statusDescription[statuses.confirmed]}
              </label>
            </Status>
            <Status>
              <label htmlFor={statuses.canceled}>
                <input
                  type="radio"
                  name={statuses.canceled}
                  value={statuses.canceled}
                  id={statuses.canceled}
                  checked={activeStatus === statuses.canceled}
                  onChange={changeAppointmentStatus}
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
  );
};
