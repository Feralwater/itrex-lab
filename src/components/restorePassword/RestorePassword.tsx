import React from 'react';
import style from "../signIn/SignIn.module.scss";
import RestorePasswordForm from "../forms/RestorePasswordForm";

const RestorePassword = () => {
    return (
        <div className={style.bodyAuth}>
            <div className={style.form__container}>
                <RestorePasswordForm/>
            </div>
        </div>
    );
};

export default RestorePassword;