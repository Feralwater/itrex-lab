import { Dispatch, SetStateAction } from 'react';
import { RoleName, Status } from 'redux/reducers/reducers.types';

export interface EditProfileData {
  firstName: string;
  lastName: string;
  photo: File | string;
}

export interface ChangePasswordProps {
  setActiveChangePasswordModal: Dispatch<SetStateAction<boolean>>;
}

export interface EditProfileFormProps {
  handleSubmitForm: ({
    firstName,
    lastName,
    photo,
  }: EditProfileData) => void;
  status: Status;
  initialValues: EditProfileData;
  profilePhoto: string;
  closeEditModeHandler: () => void
}

export interface EditProfileFormContainerProps {
  closeEditModeHandler: () => void
}

export interface ProfileProps {
  roleName?: RoleName;
  firstName: string;
  lastName: string;
  photo: string;
  activeChangePasswordModal: boolean;
  setActiveChangePasswordModal: Dispatch<SetStateAction<boolean>>;
  closeModalHandler: () => void;
  logoutHandler: () => void;
  openEditModeHandler: () => void
}
