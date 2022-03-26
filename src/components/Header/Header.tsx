import React from 'react';
import { Link } from 'react-router-dom';
import { RoleName } from 'redux/reducers/reducers.types';
import { PATH } from 'routes/constants';
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
  roleName?: RoleName;
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
      <HeaderLogo to={PATH.DEFAULT}>
        <Logo />
        <LogoText>{componentsDictionary.header.logoText}</LogoText>
      </HeaderLogo>
      <User>
        <UserInfo>
          <UserName>{`${firstName} ${lastName}`}</UserName>
          <UserRole>{roleName}</UserRole>
        </UserInfo>
        <UserImageContainer>
          <Link to={PATH.profile(roleName)}>
            <UserImage src={photo} alt={componentsDictionary.header.photoAlt} />
          </Link>
          <NetworkStatus />
        </UserImageContainer>
      </User>
    </HeaderContainer>
  </HeaderWrapper>
);
