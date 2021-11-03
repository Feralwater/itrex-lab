import React from 'react';
import {Link} from 'react-router-dom';
import SignInForm from "../forms/SignInForm";
import style from "./SignIn.module.scss"

const SignIn = () => {
    return (
        <div className={style.bodyAuth}>
            <div className={style.form__container}>
                <SignInForm/>
                <div className={style.signInUp__message}>
                    Don't have an account?
                    <Link to={"/sign-up"} className={style.signInUp__link}>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;