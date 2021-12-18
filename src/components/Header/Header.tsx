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
import { componentsDictionary } from '../dictionary/componentsDictionary';
import { PATH, ROLES } from '../../routes/constants';
import { RoleName } from '../../redux/reducers/reducers.types';

export interface HeaderProps {
  roleName: RoleName;
  firstName: string;
  lastName: string;
  photo: string;
}

export const Header: React.VFC<HeaderProps> = ({
  firstName,
  lastName,
  roleName,
  photo,
}) => (
  <HeaderWrapper>
    <HeaderContainer>
      <HeaderLogo to={roleName === ROLES.DOCTOR ? PATH.PATIENTS : PATH.APPOINTMENTS}>
        <Logo />
        <LogoText>{componentsDictionary.header.logoText}</LogoText>
      </HeaderLogo>
      <User>
        <UserInfo>
          <UserName>{`${firstName} ${lastName}`}</UserName>
          <UserRole>{roleName}</UserRole>
        </UserInfo>
        <UserImageContainer>
          <Link to={PATH.PROFILE}>
            <UserImage src={photo} alt={componentsDictionary.header.avatarAlt} />
          </Link>
          <NetworkStatus isOnline />
        </UserImageContainer>
      </User>
    </HeaderContainer>
  </HeaderWrapper>
);
