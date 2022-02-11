import React, { useState } from 'react';
import { EditProfileFormContainer } from 'pages/Profile/EditProfileFormContainer';
import { useAppSelector, useProfile } from 'hooks';
import { selectProfile } from 'redux/reducers';
import { loginRepository } from 'resources/loginRepository';
import { Profile } from './Profile';

export const ProfileContainer:React.VFC = () => {
  const {
    firstName,
    lastName,
    roleName,
    photo,
  } = useAppSelector(selectProfile);
  const [activeChangePasswordModal, setActiveChangePasswordModal] = useState<boolean>(false);
  const [editMode, setEditMode] = useState(false);
  const closeEditModeHandler = () => setEditMode(false);
  const openEditModeHandler = () => setEditMode(true);

  const closeModalHandler = () => setActiveChangePasswordModal(true);
  const { initProfile } = useProfile();
  const logoutHandler = () => {
    loginRepository.removeAccessToken();
    loginRepository.removeRefreshToken();
    initProfile();
  };
  if (editMode) {
    return <EditProfileFormContainer closeEditModeHandler={closeEditModeHandler} />;
  }
  return (
    <Profile
      openEditModeHandler={openEditModeHandler}
      roleName={roleName}
      firstName={firstName}
      lastName={lastName}
      photo={photo}
      activeChangePasswordModal={activeChangePasswordModal}
      setActiveChangePasswordModal={setActiveChangePasswordModal}
      closeModalHandler={closeModalHandler}
      logoutHandler={logoutHandler}
    />
  );
};
