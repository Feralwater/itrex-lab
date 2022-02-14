import React from 'react';
import { Link } from 'react-router-dom';
import { RoleName } from 'redux/reducers/reducers.types';
import { PATH, ROLES } from 'routes/const';
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
      <HeaderLogo to={roleName === ROLES.DOCTOR ? PATH.DOCTOR_APPOINTMENTS : PATH.PATIENT_APPOINTMENTS}>
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
