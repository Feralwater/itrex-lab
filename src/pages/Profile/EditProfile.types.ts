import { Dispatch, SetStateAction } from 'react';

export interface EditProfileData{
  firstName: string
  lastName: string
  avatar: File | string
}

export interface ChangePasswordProps{
  setActiveChangePasswordModal: Dispatch<SetStateAction<boolean>>;
}
