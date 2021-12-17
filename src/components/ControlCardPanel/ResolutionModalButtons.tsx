import React from 'react';
import { ResolutionModalButtonsProps } from './ControlCardPanel.types';
import { ResolutionModalFooter } from './ControlCardPanel.styles';
import { Button } from '../Button';

export const ResolutionModalButtons: React.VFC<ResolutionModalButtonsProps> = ({
  cancelHandler,
  saveHandler,
  activeButtonText,
  passiveButtonText,
  activeButtonIcon,
  passiveButtonIcon,
  activeButtonType,
  disabled,
}) => (
  <ResolutionModalFooter>
    <Button
      type="button"
      icon="left"
      size="large"
      variant="secondary"
      iconUrl={passiveButtonIcon}
      isBorder
      onClick={cancelHandler}
    >
      {passiveButtonText}
    </Button>
    <Button
      type={activeButtonType}
      icon="left"
      size="large"
      variant="primary"
      iconUrl={activeButtonIcon}
      onClick={saveHandler}
      disabled={disabled}
    >
      {activeButtonText}
    </Button>
  </ResolutionModalFooter>
);
