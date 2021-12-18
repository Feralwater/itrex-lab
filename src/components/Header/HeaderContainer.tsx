import React from 'react';
import { Header } from './Header';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { selectEditPatientProfile } from '../../redux/reducers/editPatientProfile.reducer';
import { ROLES } from '../../routes/constants';

export const HeaderContainer:React.VFC = () => {
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
  return (
    <Header
      roleName={roleName}
      firstName={userFirstName}
      lastName={userLastName}
      photo={userPhoto}
    />
  );
};
