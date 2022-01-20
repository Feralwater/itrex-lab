import React, { useState } from 'react';
import { Profile } from './Profile';
import { useAppSelector, useProfile } from '../../hooks';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { selectProfile } from '../../redux/reducers';
import { loginRepository } from '../../resources/loginRepository';
import { ROLES } from '../../routes/constants';
import { selectEditPatientProfile } from '../../redux/reducers/editPatientProfile.reducer';

export const ProfileContainer:React.VFC = () => {
  const {
    firstName,
    lastName,
    roleName,
    photo,
  } = useAppSelector(selectProfile);
  const {
    firstName: editDoctorFirstName,
    lastName: editDoctorLastName,
    photo: editDoctorPhoto,
  } = useAppSelector(selectEditProfile);
  const {
    firstName: editPatientFirstName,
    lastName: editPatientLastName,
    photo: editPatientPhoto,
  } = useAppSelector(selectEditPatientProfile);
  const userFirstName = roleName === ROLES.DOCTOR ? (editDoctorFirstName || firstName) : (editPatientFirstName || firstName);
  const userLastName = roleName === ROLES.DOCTOR ? (editDoctorLastName || lastName) : (editPatientLastName || lastName);
  const userPhoto = roleName === ROLES.DOCTOR ? (editDoctorPhoto || photo) : (editPatientPhoto || photo);
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
