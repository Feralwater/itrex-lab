import React, { useState } from 'react';
import Button from 'components/Button/Button';
import {
  CommandsList,
  ControlCommand, ResolutionModalBody,
  ResolutionModalFooter,
  ResolutionModalTextArea, ResolutionModalTitle,
  ResolutionTextareaTitle,
  SelectedPatientImage,
  SelectedPatientInfo,
} from './ControlCardPanel.styles';
import { ControlCardPanelProps } from './ControlCardPanel.types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import dictionary from '../../../dictionary/dictionary';
import { deleteAppointment } from '../../../redux/actions/appointmentsForDoctors.actions';
import resolution from '../../../redux/actions/resolution.actions';
import ModalWindow from '../Modal/Modal';

const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({ appointmentID }) => {
  const dispatch = useAppDispatch();
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [resolutionText, setResolutionText] = useState<string>('');
  const selectedAppointment = useAppSelector((state) => state.appointmentsForDoctor.appointments.find((appointment) => appointment.id === appointmentID));
  return (
    <>
      <CommandsList>
        <ControlCommand
          onClick={() => setActiveModal(true)}
        >
          {dictionary.doctorPage.controlCommandCreate}
        </ControlCommand>
        <ControlCommand>{dictionary.doctorPage.controlCommandEdit}</ControlCommand>
        <ControlCommand
          onClick={() => dispatch(deleteAppointment.pending({ id: appointmentID }))}
        >
          {dictionary.doctorPage.controlCommandDelete}
        </ControlCommand>
      </CommandsList>
      <ModalWindow activeModal={activeModal} setActiveModal={setActiveModal}>
        <ResolutionModalBody>
          <ResolutionModalTitle>{dictionary.resolutionModal.resolutionTitle}</ResolutionModalTitle>
          <SelectedPatientInfo>
            <SelectedPatientImage src={selectedAppointment?.patient.photo} alt="patient`s avatar" />
            <span>
              {selectedAppointment?.patient.first_name}
              {' '}
              {selectedAppointment?.patient.last_name}
            </span>
          </SelectedPatientInfo>
          <ResolutionTextareaTitle>{dictionary.resolutionModal.resolutionTextareaTitle}</ResolutionTextareaTitle>
          <ResolutionModalTextArea value={resolutionText} onChange={(event) => setResolutionText(event.currentTarget.value)} />
        </ResolutionModalBody>
        <ResolutionModalFooter>
          <Button
            type="button"
            icon="left"
            size="large"
            variant="secondary"
            iconUrl="./svgImages/close-icon.svg"
            isBorder
            onClick={() => setActiveModal(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            icon="left"
            size="large"
            variant="primary"
            iconUrl="./svgImages/board-icon.svg"
            onClick={() => {
              dispatch(resolution.pending({ resolution: resolutionText, appointmentID }));
              setActiveModal(false);
            }}
          >
            Create
          </Button>
        </ResolutionModalFooter>
      </ModalWindow>
    </>
  );
};

export default ControlCardPanel;
