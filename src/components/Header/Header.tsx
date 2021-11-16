import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgImages/logo.svg';
import { getMe } from '../../mockData/doctors';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  LogoText, NetworkStatus,
  User,
  UserImage,
  UserImageContainer,
  UserInfo, UserName, UserRole,
} from './Header.styles';
import { HeaderPropsType, PageOwnerType } from './Header.types';
import dictionary from '../../dictionary/dictionary';

const Header: React.VFC<HeaderPropsType> = () => {
  const pageOwner: PageOwnerType = getMe();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Logo />
          <LogoText>{dictionary.header.logoText}</LogoText>
        </HeaderLogo>
        <User>
          <UserInfo>
            <UserName>{`${pageOwner.firstName} ${pageOwner.secondName}`}</UserName>
            <UserRole>{pageOwner.role}</UserRole>
          </UserInfo>
          <UserImageContainer>
            <UserImage src={pageOwner.avatar} alt={dictionary.header.avatarAlt} />
            <NetworkStatus isOnline />
          </UserImageContainer>
        </User>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
