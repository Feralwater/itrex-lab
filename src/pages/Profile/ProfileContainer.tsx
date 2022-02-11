import React, { useState } from 'react';
import { EditProfileFormContainer } from 'pages/Profile/EditProfileFormContainer';
import { useAppSelector, useProfile } from 'hooks';
import { selectEditProfile } from 'redux/reducers/editProfile.reducer';
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
  const {
    firstName: editFirstName,
    lastName: editLastName,
    photo: editPhoto,
  } = useAppSelector(selectEditProfile);

  const userFirstName = editFirstName || firstName;
  const userLastName = editLastName || lastName;
  const userPhoto = editPhoto || photo;
  const [activeChangePasswordModal, setActiveChangePasswordModal] = useState<boolean>(false);
  const closeModalHandler = () => setActiveChangePasswordModal(true);
  const { initProfile } = useProfile();
  const logoutHandler = () => {
    loginRepository.removeAccessToken();
    loginRepository.removeRefreshToken();
    initProfile();
  };
  const [editMode, setEditMode] = useState(false);
  const closeEditModeHandler = () => setEditMode(false);
  const openEditModeHandler = () => setEditMode(true);
  if (editMode) {
    return <EditProfileFormContainer closeEditModeHandler={closeEditModeHandler} />;
  }
  return (
    <Profile
      openEditModeHandler={openEditModeHandler}
      roleName={roleName}
      firstName={userFirstName}
      lastName={userLastName}
      photo={userPhoto}
      activeChangePasswordModal={activeChangePasswordModal}
      setActiveChangePasswordModal={setActiveChangePasswordModal}
      closeModalHandler={closeModalHandler}
      logoutHandler={logoutHandler}
    />
  );
};
