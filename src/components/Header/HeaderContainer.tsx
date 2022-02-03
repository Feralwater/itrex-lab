import React from 'react';
import { Header } from './Header';
import { useAppSelector } from '../../hooks';
import { selectProfile } from '../../redux/reducers';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';

export const HeaderContainer:React.VFC = () => {
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
  return (
    <Header
      roleName={roleName}
      firstName={userFirstName}
      lastName={userLastName}
      photo={userPhoto}
    />
  );
};
