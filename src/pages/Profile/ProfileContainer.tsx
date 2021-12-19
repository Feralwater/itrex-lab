import React, { useState } from 'react';
import { Profile } from './Profile';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { selectProfile } from '../../redux/reducers';
import { loginRepository } from '../../resources/loginRepository';
import { profile } from '../../redux/actions';
import { ROLES } from '../../routes/constants';
import { selectEditPatientProfile } from '../../redux/reducers/editPatientProfile.reducer';

const ProfileContainer:React.VFC = () => {
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
  const dispatch = useAppDispatch();
  const closeModalHandler = () => setActiveChangePasswordModal(true);
  const logoutHandler = () => {
    loginRepository.removeAccessToken();
    loginRepository.removeRefreshToken();
    dispatch(profile.pending({
      first_name: '',
      id: '',
      last_name: '',
      photo: '',
      role_name: ROLES.PUBLIC,
    }));
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

export default ProfileContainer;