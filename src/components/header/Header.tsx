import React from 'react';
import {ReactComponent as Logo} from '../../svgImages/logo.svg';
import style from "./Header.module.scss"
import {getMe} from "../../actions/doctors";
import { Link } from 'react-router-dom';

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
        <header className={style.header}>
            <div className={style.header__container}>
                <div className={style.header__logo}>
                    <Logo/>
                    <span className={style.header__logo_text}>palm clinic</span>
                </div>
                <div className={style.header__user}>
                    <Link to={"/sign-in"}>back</Link>
                    <div className={style.header__user_info}>
                        <p className={style.header__user_name}>{doctor.firstName + " " + doctor.secondName}</p>
                        <p className={style.header__user_role}>{doctor.role}</p>
                    </div>
                    <div className={style.header__user_img}>
                        <img src={doctor.avatar} alt="doctor\`s avatar"/>
                        <span className={style.header__user_online}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;