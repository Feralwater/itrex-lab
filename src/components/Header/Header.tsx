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
import dictionary from '../../dictionary/dictionary';
import { useAppSelector } from '../../hooks';

const Header: React.VFC = () => {
  const firstName = useAppSelector((state) => state.profile.firstName);
  const secondName = useAppSelector((state) => state.profile.lastName);
  const roleName = useAppSelector((state) => state.profile.roleName);
  const avatar = useAppSelector((state) => state.profile.photo);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Logo />
          <LogoText>{dictionary.header.logoText}</LogoText>
        </HeaderLogo>
        <User>
          <UserInfo>
            <UserName>{`${firstName} ${secondName}`}</UserName>
            <UserRole>{roleName}</UserRole>
          </UserInfo>
          <UserImageContainer>
            <UserImage src={avatar} alt={dictionary.header.avatarAlt} />
            <NetworkStatus isOnline />
          </UserImageContainer>
        </User>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
