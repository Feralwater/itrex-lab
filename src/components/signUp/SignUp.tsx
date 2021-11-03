import React from 'react';
import style from "../signIn/SignIn.module.scss";
import {Link} from "react-router-dom";
import SignUpForm from "../forms/SingUpForm";

const SignUp = () => {
    return (
        <div className={style.bodyAuth}>
            <div className={style.form__container}>
                <SignUpForm/>
                <div className={style.signInUp__message}>
                    Already have an account?
                    <Link to={"/sign-in"} className={style.signInUp__link}>Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;