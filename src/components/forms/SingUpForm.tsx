import {Formik, Field, Form, FormikHelpers, ErrorMessage} from 'formik';
import Button from "../button/Button";
import * as Yup from "yup"
import style from "./Form.module.scss"
import React from "react";

type Values = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

const SignUpForm = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required')
            .typeError('field first name should be string literal'),
        lastName: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(20, 'Must be 15 characters or less')
            .required('Required')
            .typeError('field last name should be string literal'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
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
                        <div className={style.form_box__input + " " + style.form_box__input_firstName}>
                            <Field
                                name="firstName"
                                placeholder="First Name"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            {touched.firstName && errors.firstName &&
                            <ErrorMessage name="firstName" component="span" className={style.inputError__message}/>}
                        </div>
                        <div className={style.form_box__input + " " + style.form_box__input_lastName}>
                            <Field
                                name="lastName"
                                placeholder="Last Name"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            {touched.lastName && errors.lastName &&
                            <ErrorMessage name="lastName" component="span" className={style.inputError__message}/>}
                        </div>
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
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <i className={style.form_box__input_password_icon + " " + style.form_box__input_password_icon_nonVisible}/>
                            {touched.password && errors.password &&
                            <ErrorMessage component={'span'} className={style.inputError__message} name={"password"}/>}
                        </div>
                        <div className={style.form_box__input + " " + style.form_box__input_confirmPassword}>
                            <Field
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            <i className={style.form_box__input_password_icon + " " + style.form_box__input_password_icon_nonVisible}/>
                            {touched.confirmPassword && errors.confirmPassword &&
                            <ErrorMessage component={'span'} className={style.inputError__message}
                                          name={"confirmPassword"}/>}
                        </div>
                        <div className={style.form_box__button_wrapper}>
                            <Button type="submit"
                                    disabled={!(isValid && dirty)}
                                    onClick={handleSubmit}
                                    className="form_box__button"
                            >Sign Up</Button>
                            <span className={style.form_box__right_arrow}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default SignUpForm;