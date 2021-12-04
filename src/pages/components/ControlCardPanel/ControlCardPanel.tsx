import React, { useState } from 'react';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { ControlCardPanelProps } from './ControlCardPanel.types';
import { useAppDispatch } from '../../../hooks';
import dictionary from '../../../dictionary/dictionary';
import { deleteAppointment } from '../../../redux/actions/appointmentsForDoctors.actions';
import CreateResolutionModal from '../CreateResolutionModal/CreateResolutionModal';

const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({ appointmentID }) => {
  const dispatch = useAppDispatch();
  const [activeModal, setActiveModal] = useState<boolean>(false);
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
      <CreateResolutionModal activeModal={activeModal} setActiveModal={setActiveModal}>
        Create a Resolution
      </CreateResolutionModal>
    </>
  );
};

export default ControlCardPanel;
