import React from 'react';
import {ReactComponent as Logo} from '../../svgImages/logo.svg';
import {getMe} from "../../actions/doctors";
import {Link} from 'react-router-dom';
import {
    HeaderContainer,
    HeaderLogo,
    HeaderWrapper,
    LogoText, NetworkStatus,
    User,
    UserImage,
    UserImageContainer,
    UserInfo, UserName, UserRole
} from "./HeaderStyles";

type HeaderPropsType = {}

type DoctorType = {
    avatar: string
    firstName: string
    secondName: string
    role: string
}

const Header: React.VFC<HeaderPropsType> = () => {
    const doctor: DoctorType = getMe()
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLogo>
                    <Logo/>
                    <LogoText>palm clinic</LogoText>
                </HeaderLogo>
                <User>
                    <Link to={"/sign-in"}>back</Link>
                    <UserInfo>
                        <UserName>{doctor.firstName + " " + doctor.secondName}</UserName>
                        <UserRole>{doctor.role}</UserRole>
                    </UserInfo>
                    <UserImageContainer>
                        <UserImage src={doctor.avatar} alt="doctor\`s avatar"/>
                        <NetworkStatus isOnline={true}/>
                    </UserImageContainer>
                </User>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;