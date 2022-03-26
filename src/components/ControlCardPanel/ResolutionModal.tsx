import React, { useState, ChangeEvent } from 'react';
import * as Yup from 'yup';
import { dictionary } from 'pages';
import { PatientInfo } from 'components/AppointmentCard/PatientInfo';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import {
  ModalErrorMessage,
  ResolutionModalBody, ResolutionModalTextArea,
  ResolutionModalTitle, ResolutionTextareaTitle,
} from './ControlCardPanel.styles';
import { ResolutionModalProps } from './ControlCardPanel.types';

export const ResolutionModal:React.VFC<ResolutionModalProps> = ({
  resolutionText,
  setResolutionText,
  appointmentID,
  resolutionModalTitle,
}) => {
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
      <PatientInfo appointmentID={appointmentID} />
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
