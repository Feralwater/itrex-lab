import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  LogoText, NetworkStatus,
  User,
  UserImage,
  UserImageContainer,
  UserInfo,
  UserName,
  UserRole,
} from './Header.styles';
import { useAppSelector } from '../../hooks';
import { componentsDictionary } from '../dictionary/componentsDictionary';
import { selectProfile } from '../../redux/reducers';
import { PATH } from '../../routes/constants';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';

export const Header: React.VFC = () => {
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
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Logo />
          <LogoText>{componentsDictionary.header.logoText}</LogoText>
        </HeaderLogo>
        <User>
          <UserInfo>
            <UserName>{`${editFirstName || firstName} ${editLastName || lastName}`}</UserName>
            <UserRole>{roleName}</UserRole>
          </UserInfo>
          <UserImageContainer>
            <Link to={PATH.PROFILE}>
              <UserImage src={editPhoto || photo} alt={componentsDictionary.header.avatarAlt} />
            </Link>
            <NetworkStatus isOnline />
          </UserImageContainer>
        </User>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
