import React, {
  ChangeEvent, forwardRef, MutableRefObject, useState,
} from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { statuses } from 'components/AppointmentCard/constants';
import { appointmentsForDoctorSlice, selectAppointmentsForDoctor } from 'redux/reducers';
import { ModalWindow, OpenCloseHandle } from 'components/Modal';
import { ResolutionModalBody, ResolutionModalTitle } from 'components/ControlCardPanel/ControlCardPanel.styles';
import { componentsDictionary } from 'components/dictionary/componentsDictionary';
import { ResolutionModalButtons } from 'components/ControlCardPanel';
import { dictionary } from 'pages';
import { StatusSwitcher } from 'components/AppointmentCard/StatusSwitcher';
import { PatientInfo, PatientInfoProps } from './PatientInfo';

export const ChangeStatusModal = forwardRef<OpenCloseHandle, PatientInfoProps>(({ appointmentID }, ref) => {
  const dispatch = useAppDispatch();
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const selectedAppointment = appointments.find((appointment) => (appointment.appointmentID === appointmentID));
  const selectedAppointmentStatus = selectedAppointment ? selectedAppointment.appointmentStatus : statuses.waiting;
  const [activeStatus, setActiveStatus] = useState<string>(selectedAppointmentStatus);

  const changeAppointmentStatus = (event: ChangeEvent<HTMLInputElement>) => setActiveStatus(event.currentTarget.value);
  const saveAppointmentStatusHandler = () => {
    dispatch(appointmentsForDoctorSlice.actions.updateStatusPending({
      id: appointmentID,
      status: activeStatus,
    }));
    (ref as MutableRefObject<OpenCloseHandle>)?.current.close();
  };
  const cancelHandler = () => (ref as MutableRefObject<OpenCloseHandle>)?.current.close();

  return (
    <ModalWindow ref={ref}>
      <>
        <ResolutionModalBody>
          <ResolutionModalTitle>{componentsDictionary.changeAppointmentStatus.title}</ResolutionModalTitle>
          <PatientInfo appointmentID={appointmentID} />
          {componentsDictionary.changeAppointmentStatus.subTitle}
          <StatusSwitcher
            activeStatus={activeStatus}
            changeAppointmentStatus={changeAppointmentStatus}
          />
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
      </>
    </ModalWindow>
  );
});
