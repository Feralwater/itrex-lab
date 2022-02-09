import { RoleName } from 'redux/reducers/reducers.types';
import { ResolutionForDoctor } from 'resources/resolutions/resolutions.types';
import { Dispatch, SetStateAction } from 'react';

export interface AppointmentCardContainerProps {
  photo: string;
  appointmentID: string;
  firstName: string;
  lastName: string;
  status: string;
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
  toggleMenuHandler: ()=>void;
  isCardDescription: boolean;
  time: string;
  reason?: string;
  resolution?: ResolutionForDoctor;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuRef: any;
  specialization?: string
  status?: string
}
