import React, { useState, ChangeEvent } from 'react';
import * as Yup from 'yup';
import { dictionary } from 'pages';
import { useAppSelector } from 'hooks';
import { selectAppointmentsForDoctor } from 'redux/reducers';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import {
  ModalErrorMessage,
  ResolutionModalBody, ResolutionModalTextArea,
  ResolutionModalTitle, ResolutionTextareaTitle,
  SelectedPatientImage,
  SelectedPatientInfo,
} from './ControlCardPanel.styles';
import { ResolutionModalProps } from './ControlCardPanel.types';

export const ResolutionModal:React.VFC<ResolutionModalProps> = ({
  resolutionText,
  setResolutionText,
  appointmentID,
  resolutionModalTitle,
}) => {
  const { appointments } = useAppSelector(selectAppointmentsForDoctor);
  const selectedAppointment = appointments.find((appointment) => appointment.appointmentID === appointmentID);
  const validationSchema = Yup.object({
    resolutionText: Yup.string()
      .min(2, 'Must be 2 characters or more')
      .max(200, 'Must be 200 characters or less')
      .required('Required'),
  });
  const [isValidResolution, setIsValidResolution] = useState<boolean>(true);

  const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setResolutionText(event.currentTarget.value);
    validationSchema
      .isValid({ resolutionText: event.currentTarget.value })
      .then((valid) => {
        setIsValidResolution(valid);
      });
  };

  return (
    <ResolutionModalBody>
      <ResolutionModalTitle>{resolutionModalTitle}</ResolutionModalTitle>
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
      <ResolutionTextareaTitle>
        {dictionary.resolutionModal.resolutionTextareaTitle}
        <ResolutionModalTextArea
          value={resolutionText}
          onChange={onChangeHandler}
        />
      </ResolutionTextareaTitle>
      {!isValidResolution
          && <ModalErrorMessage>{componentsDictionary.controlCardPanel.errorMessage}</ModalErrorMessage>}
    </ResolutionModalBody>
  );
};
