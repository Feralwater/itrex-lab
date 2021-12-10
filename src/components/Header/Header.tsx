import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgImages/logo.svg';

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
import componentsDictionary from '../dictionary/componentsDictionary';
import { selectProfile } from '../../redux/reducers';

const Header: React.VFC = () => {
  const {
    firstName, lastName, roleName, photo,
  } = useAppSelector(selectProfile);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Logo />
          <LogoText>{componentsDictionary.header.logoText}</LogoText>
        </HeaderLogo>
        <User>
          <UserInfo>
            <UserName>{`${firstName} ${lastName}`}</UserName>
            <UserRole>{roleName}</UserRole>
          </UserInfo>
          <UserImageContainer>
            <UserImage src={photo} alt={componentsDictionary.header.avatarAlt} />
            <NetworkStatus isOnline />
          </UserImageContainer>
        </User>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
