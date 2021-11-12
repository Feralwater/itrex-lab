import React, {useState} from 'react';
import * as Yup from "yup";
import {Formik, FormikHelpers} from "formik";
import {
    ButtonRightArrow,
    ButtonWrapper,
    CustomErrorMessage,
    CustomField,
    CustomForm, CustomLink, FormTitle, InputEmailContainer, InputPasswordContainer,
    InputPasswordIcon
} from "./FormStyles";
import Button from "../../components/button/Button";

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
                <CustomForm>
                    <FormTitle as={"h1"}>Sign In</FormTitle>
                    <InputEmailContainer>
                        <CustomField
                            isError={touched.email && errors.email}
                            name="email"
                            placeholder="Email"
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email &&
                        <CustomErrorMessage component={'span'} name={"email"}/>}
                    </InputEmailContainer>
                    <InputPasswordContainer>
                        <CustomField
                            isError={touched.password && errors.password}
                            name="password"
                            placeholder="Password"
                            type={isSecurePassword ? "password" : "text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <InputPasswordIcon isVisible={isSecurePassword}
                                           onClick={() => setIsSecurePassword(prev => !prev)}/>
                        {touched.password && errors.password &&
                        <CustomErrorMessage component={'span'} name={"password"}/>}
                    </InputPasswordContainer>
                    <ButtonWrapper>
                        <Button type="submit"
                                disabled={!(isValid && dirty)}
                                onClick={handleSubmit}
                                size={"large"}
                                icon={"right"}
                                variant={"primary"}
                        >Sign in</Button>
                        <ButtonRightArrow/>
                    </ButtonWrapper>
                    <CustomLink to={"/restore-password"}>Forgot Password?</CustomLink>
                </CustomForm>
            )}
        </Formik>
    );
};

export default SignInForm;