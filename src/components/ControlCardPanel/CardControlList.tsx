import React from 'react';
import { useAppDispatch } from 'hooks';
import { dictionary } from 'pages';
import { appointmentsForDoctorSlice } from 'redux/reducers';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { CardControlListProps } from './ControlCardPanel.types';

export const CardControlList:React.VFC<CardControlListProps> = ({
  setActiveCreateResolutionModal,
  setActiveEditResolutionModal,
  appointmentID,
}) => {
  const dispatch = useAppDispatch();
  return (
    <CommandsList>
      <ControlCommand
        onClick={() => setActiveCreateResolutionModal(true)}
      >
        {dictionary.doctorPage.controlCommandCreate}
      </ControlCommand>
      <ControlCommand
        onClick={() => setActiveEditResolutionModal(true)}
      >
        {dictionary.doctorPage.controlCommandEdit}
      </ControlCommand>
      <ControlCommand
        onClick={() => dispatch(appointmentsForDoctorSlice.actions.deleteAppointmentPending({ id: appointmentID }))}
      >
        {dictionary.doctorPage.controlCommandDelete}
      </ControlCommand>
    </CommandsList>
  );
};
