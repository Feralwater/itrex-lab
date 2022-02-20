import { RoleName } from 'redux/reducers/reducers.types';
import { ResolutionForDoctor } from 'resources/resolutions/resolutions.types';
import {
  Dispatch, MutableRefObject, ReactElement, SetStateAction,
} from 'react';

export interface AppointmentCardContainerProps {
  photo: string;
  appointmentID: string;
  firstName: string;
  lastName: string;
  status?: string;
  role: RoleName;
  specialization?:string;
  resolution?: ResolutionForDoctor;
  time: string;
  reason?: string;
}

export interface AppointmentCardHeaderProps {
  status?: string
  specialization?: string
}

export interface AppointmentCardProps {
  photo: string;
  appointmentID: string;
  firstName: string;
  lastName: string;
  role: RoleName;
  time: string;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuRef: MutableRefObject<HTMLDivElement> | undefined;
  specialization?: string
  status?: string
  cardIcon: ReactElement
  cardDescription?: string
  resolutionID?: string
}

export interface AppointmentCardSettingsButtonProps{
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuRef: MutableRefObject<HTMLDivElement> | undefined;
  isMenuOpen: boolean;
  appointmentID: string
  resolutionID?: string
}
