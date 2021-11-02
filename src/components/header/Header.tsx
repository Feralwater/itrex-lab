import React from 'react';
import {ReactComponent as Logo} from '../svgImages/logo.svg';

type HeaderPropsType = {
    user:any
}

const Header: React.VFC<HeaderPropsType> = ({user}) => {
    return (
        <header>
            <div>
            <Logo/>
            <span className="header__logo-text">palm clinic</span>
            </div>
            <div className="header__user">
                <div className="header__user-info">
                    <p className="header__user-name">{user.firstName + " " + user.secondName}</p>
                    <p className="header__user-role">{user.role}</p>
                </div>
                <div className="header__user-img">
                    <img src={user.avatar} alt="doctor\`s avatar"/>
                        <span className="header__user-online"/>
                </div>
            </div>
        </header>
    );
};

export default Header;