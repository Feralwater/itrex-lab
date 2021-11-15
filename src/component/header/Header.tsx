import React from 'react';
import {ReactComponent as Logo} from '../../assets/svgImages/logo.svg';
import {getMe} from "../../mockData/doctors";

import {
    HeaderContainer,
    HeaderLogo,
    HeaderWrapper,
    LogoText, NetworkStatus,
    User,
    UserImage,
    UserImageContainer,
    UserInfo, UserName, UserRole
} from "./Header.styles";

type HeaderPropsType = {}

type PageOwnerType = {
    id: string
    avatar: string
    firstName: string
    secondName: string
    role: string
}

const Header: React.VFC<HeaderPropsType> = () => {
    const pageOwner: PageOwnerType = getMe()
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLogo>
                    <Logo/>
                    <LogoText>palm clinic</LogoText>
                </HeaderLogo>
                <User>
                    <UserInfo>
                        <UserName>{pageOwner.firstName + " " + pageOwner.secondName}</UserName>
                        <UserRole>{pageOwner.role}</UserRole>
                    </UserInfo>
                    <UserImageContainer>
                        <UserImage src={pageOwner.avatar} alt="doctor\`s avatar"/>
                        <NetworkStatus isOnline={true}/>
                    </UserImageContainer>
                </User>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;