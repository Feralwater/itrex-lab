import React from 'react';
import {
  ResolutionModalBody, ResolutionModalTextArea,
  ResolutionModalTitle, ResolutionTextareaTitle,
  SelectedPatientImage,
  SelectedPatientInfo,
} from './ControlCardPanel.styles';
import dictionary from '../../pages/dictionary/pagesDictionary';
import componentsDictionary from '../dictionary/componentsDictionary';
import { useAppSelector } from '../../hooks';
import { selectAppointmentsForDoctor } from '../../redux/reducers';
import { ResolutionModalProps } from './ControlCardPanel.types';

export const ResolutionModal:React.VFC<ResolutionModalProps> = ({
  resolutionText,
  setResolutionText,
  appointmentID,
  resolutionModalTitle,
}) => {
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const selectedAppointment = appointments.find((appointment) => appointment.id === appointmentID);
  return (
    <ResolutionModalBody>
      <ResolutionModalTitle>{resolutionModalTitle}</ResolutionModalTitle>
      <SelectedPatientInfo>
        <SelectedPatientImage
          src={selectedAppointment?.patient.photo}
          alt={componentsDictionary.controlCardPanel.selectedPatientImageAlt}
        />
        <span>
          {selectedAppointment?.patient.first_name}
          {' '}
          {selectedAppointment?.patient.last_name}
        </span>
      </SelectedPatientInfo>
      <ResolutionTextareaTitle>{dictionary.resolutionModal.resolutionTextareaTitle}</ResolutionTextareaTitle>
      <ResolutionModalTextArea
        value={resolutionText}
        onChange={(event) => setResolutionText(event.currentTarget.value)}
      />
    </ResolutionModalBody>
  );
};
