import { Dispatch, SetStateAction } from 'react';

export interface ControlCardPanelProps {
  appointmentID: string;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  resolutionID?: string;
}

export interface CardControlListProps {
  setActiveCreateResolutionModal: Dispatch<SetStateAction<boolean>>;
  setActiveEditResolutionModal: Dispatch<SetStateAction<boolean>>;
  appointmentID: string;
}

export interface ResolutionModalProps {
  resolutionText: string;
  setResolutionText: Dispatch<SetStateAction<string>>;
  appointmentID: string;
  resolutionModalTitle: string;
}

export interface ResolutionModalButtonsProps {
  cancelHandler: () => void;
  saveHandler?: () => void;
  activeButtonText: string;
  passiveButtonText: string;
  activeButtonIcon: string;
  passiveButtonIcon: string;
  activeButtonType: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
}
