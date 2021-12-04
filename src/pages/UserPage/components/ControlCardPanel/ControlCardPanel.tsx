import React from 'react';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { ControlCardPanelProps } from './ControlCardPanel.types';
import { useAppDispatch } from '../../../../hooks';
import controlPanelCommandsList from './consts';

const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({ appointmentID }) => {
  const dispatch = useAppDispatch();
  return (
    <CommandsList>
      {controlPanelCommandsList.map((controlCommand) => (
        <ControlCommand
          key={controlCommand.controlPanelCommand}
          onClick={() => controlCommand.onClickAction(dispatch, appointmentID)}
        >
          {controlCommand.controlPanelCommand}
        </ControlCommand>
      ))}
    </CommandsList>
  );
};

export default ControlCardPanel;
