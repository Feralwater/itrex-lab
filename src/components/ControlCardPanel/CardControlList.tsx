import React, { memo } from 'react';
import { useAppDispatch } from 'hooks';
import { dictionary } from 'pages';
import { appointmentsForDoctorSlice } from 'redux/reducers';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { CardControlListProps } from './ControlCardPanel.types';

export const CardControlList:React.VFC<CardControlListProps> = memo((
  { openCreateModalHandler, openEditModalHandler, appointmentID },
) => {
  const dispatch = useAppDispatch();
  return (
    <CommandsList>
      <ControlCommand onClick={() => openCreateModalHandler()}>
        {dictionary.doctorPage.controlCommandCreate}
      </ControlCommand>
      <ControlCommand onClick={() => openEditModalHandler()}>
        {dictionary.doctorPage.controlCommandEdit}
      </ControlCommand>
      <ControlCommand
        onClick={() => dispatch(appointmentsForDoctorSlice.actions.deleteAppointmentPending({ id: appointmentID }))}
      >
        {dictionary.doctorPage.controlCommandDelete}
      </ControlCommand>
    </CommandsList>
  );
});
