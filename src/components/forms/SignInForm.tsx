import React, {useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import style from "./Form.module.scss";
import Button from "../button/Button";
import {Link} from 'react-router-dom';

type Values = {
    email: string
    password: string
}

const SignInForm = () => {
    const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    })
    return (
        <div>
            <h1 className={style.form_box__title}>Sign In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
                validateOnBlur
                validationSchema={validationSchema}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      dirty,
                  }
                ) => (
                    <Form className={style.form_box}>
                        <div className={style.form_box__input + " " + style.form_box__input_email}>
                            <Field
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {touched.email && errors.email &&
                            <ErrorMessage component={'span'} name={"email"} className={style.inputError__message}/>}
                        </div>
                        <div className={style.form_box__input + " " + style.form_box__input_password}>
                            <Field
                                name="password"
                                placeholder="Password"
                                type={isSecurePassword ? "password" : "text"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <i onClick={() => setIsSecurePassword(prev => !prev)}
                               className={[style.form_box__input_password_icon, isSecurePassword ? style.form_box__input_password_icon_nonVisible : style.form_box__input_password_icon_visible].join(" ")}/>
                            {touched.password && errors.password &&
                            <ErrorMessage component={'span'} className={style.inputError__message} name={"password"}/>}
                        </div>
                        <div className={style.form_box__button_wrapper}>
                            <Button type="submit"
                                    disabled={!(isValid && dirty)}
                                    onClick={handleSubmit}
                                    className="form_box__button"
                            >Sign in</Button>
                            <span className={style.form_box__right_arrow}/>
                        </div>
                        <Link to={"/restore-password"} className={style.forgot__link}>Forgot Password?</Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignInForm;