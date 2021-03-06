import React, { memo } from 'react';
import { useAppSelector } from 'hooks';
import { selectProfile } from 'redux/reducers';
import { Header } from './Header';

export const HeaderContainer:React.VFC = memo(() => {
  const {
    firstName,
    lastName,
    roleName,
    photo,
  } = useAppSelector(selectProfile);

  return (
    <Header
      roleName={roleName}
      firstName={firstName}
      lastName={lastName}
      photo={photo}
    />
  );
});
