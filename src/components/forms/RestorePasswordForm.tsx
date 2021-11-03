import React from 'react';
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import style from "./Form.module.scss";
import Button from "../button/Button";
import {Link} from 'react-router-dom';

type Values = {
    email: string
}

const RestorePasswordForm = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
    })
    return (
        <div>
            <h1 className={style.form_box__title}>Sign Up</h1>
            <Formik
                initialValues={{
                    email: '',
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
                        <Link to={"/sign-in"} className={style.form_box__title}>
                            <span className={style.form_box__leftArrow}/>
                            Restore Password
                        </Link>
                        <div className={style.form_box__restoreMessage}>
                            Please use your email address, and we’ll send
                            you the link to reset your password
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
                        <div className={style.form_box__button_wrapper}>
                            <Button type="submit"
                                    disabled={!(isValid && dirty)}
                                    onClick={handleSubmit}
                                    className="form_box__button"
                            >Send Reset Link</Button>
                            <span className={style.form_box__right_arrow}/>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RestorePasswordForm;