import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/svgImages/logo.svg';

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
import dictionary from '../../dictionary/dictionary';
import { RootStateType } from '../../redux/store';

const Header: React.VFC = () => {
  const firstName = useSelector<RootStateType, string>((state) => state.profile.first_name);
  const secondName = useSelector<RootStateType, string>((state) => state.profile.last_name);
  const roleName = useSelector<RootStateType, string>((state) => state.profile.role_name);
  const avatar = useSelector<RootStateType, string>((state) => state.profile.photo);
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
