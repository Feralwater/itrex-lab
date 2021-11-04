import React from 'react';
import s from "../signIn/SignIn.module.scss";
import style from "../forms/Form.module.scss"
import {Link} from "react-router-dom";

type SendEmailPropsType = {
    email: string
}

const SendEmail: React.VFC<SendEmailPropsType> = ({email}) => {
    return (
        <div className={s.bodyAuth}>
            <div className={s.form__container}>
                {/*<SendEmailForm/>*/}
                <div className={style.form_box}>
                    <Link to={"/restore-password"} className={style.form_box__title}>
                        <span className={style.form_box__leftArrow}/>
                        Restore Password
                    </Link>
                    <div className={style.form_box__restoreMessage}>
                        An email has been sent to {" "}
                        <Link to={"#"} className={style.email__link}>{email}</Link>.
                        Check your inbox, and click the reset link provided.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendEmail;