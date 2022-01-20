import React from 'react';
import { useAppDispatch } from '../../hooks';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { dictionary } from '../../pages';
import { deleteAppointment } from '../../redux/actions';
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
        onClick={() => dispatch(deleteAppointment.pending({ id: appointmentID }))}
      >
        {dictionary.doctorPage.controlCommandDelete}
      </ControlCommand>
    </CommandsList>
  );
};
