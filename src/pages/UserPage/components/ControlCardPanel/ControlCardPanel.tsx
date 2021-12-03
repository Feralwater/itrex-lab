import React from 'react';
import { CommandsList, ControlCommand } from './ControlCardPanel.styles';
import { ControlCardPanelProps } from './ControlCardPanel.types';

const ControlCardPanel: React.VFC<ControlCardPanelProps> = ({ controlCommandsList }) => (
  <CommandsList>
    {controlCommandsList.map((controlCommand: string) => (<ControlCommand key={controlCommand}>{controlCommand}</ControlCommand>))}
  </CommandsList>
);

export default ControlCardPanel;
