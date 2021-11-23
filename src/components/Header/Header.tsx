import React from 'react';
import { ReactComponent as Logo } from '../../assets/svgImages/logo.svg';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  LogoText, NetworkStatus,
  User,
  UserImageContainer,
  UserInfo,
} from './Header.styles';
import dictionary from '../../dictionary/dictionary';

const Header: React.VFC = () =>
  // const firstName = useSelector<RootStateType, string>((state) => state.profile.first_name);
  // const secondName = useSelector<RootStateType, string>((state) => state.profile.last_name);
  // const roleName = useSelector<RootStateType, string>((state) => state.profile.role_name);
  // const avatar = useSelector<RootStateType, string>((state) => state.profile.photo);
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Logo />
          <LogoText>{dictionary.header.logoText}</LogoText>
        </HeaderLogo>
        <User>
          <UserInfo>
            {/* <UserName>{`${firstName} ${secondName}`}</UserName> */}
            {/* <UserRole>{roleName}</UserRole> */}
          </UserInfo>
          <UserImageContainer>
            {/* <UserImage src={avatar} alt={dictionary.header.avatarAlt} /> */}
            <NetworkStatus isOnline />
          </UserImageContainer>
        </User>
      </HeaderContainer>
    </HeaderWrapper>
  );

export default Header;
