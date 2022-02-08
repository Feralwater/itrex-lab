import React, { useState } from 'react';
import { Profile } from './Profile';
import { useAppSelector, useProfile } from '../../hooks';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { selectProfile } from '../../redux/reducers';
import { loginRepository } from '../../resources/loginRepository';

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
  return (
    <Profile
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
