import React from 'react';
import { useAppDispatch } from '../../hooks';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { dictionary } from '../../pages';
import { CardControlListProps } from './ControlCardPanel.types';
import { appointmentsForDoctorSlice } from '../../redux/reducers';

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
