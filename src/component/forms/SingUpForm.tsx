import {Formik, FormikHelpers} from 'formik';
import * as Yup from "yup"
import React, {useState} from "react";
import {
    ButtonRightArrow,
    ButtonWrapper,
    InputConfirmPasswordContainer,
    InputEmailContainer,
    InputNameContainer,
    InputPasswordContainer,
    InputPasswordIcon,
    CustomForm, CustomField, CustomErrorMessage, FormTitle,
} from "./FormStyles";
import Button from "../../components/button/Button";

type Values = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

const SignUpForm = () => {

    const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);
    const [isSecureConfirmPassword, setIsSecureConfirmPassword] = useState<boolean>(true);

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(20, 'Must be 15 characters or less')
            .required('Required'),
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
                <CustomForm>
                    <FormTitle as={"h1"}>Sign Up</FormTitle>
                    <InputNameContainer>
                        <CustomField
                            isError={touched.firstName && errors.firstName}
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />
                        {touched.firstName && errors.firstName &&
                        <CustomErrorMessage name="firstName" component="span"/>}
                    </InputNameContainer>
                    <InputNameContainer>
                        <CustomField
                            isError={touched.lastName && errors.lastName}
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                        />
                        {touched.lastName && errors.lastName &&
                        <CustomErrorMessage name="lastName" component="span"/>}
                    </InputNameContainer>
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
                    <InputConfirmPasswordContainer>
                        <CustomField
                            isError={touched.confirmPassword && errors.confirmPassword}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type={isSecureConfirmPassword ? "password" : "text"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                        />
                        <InputPasswordIcon isVisible={isSecureConfirmPassword}
                                           onClick={() => setIsSecureConfirmPassword(prev => !prev)}/>
                        {touched.confirmPassword && errors.confirmPassword &&
                        <CustomErrorMessage component={'span'} name={"confirmPassword"}/>}
                    </InputConfirmPasswordContainer>
                    <ButtonWrapper>
                        <Button type="submit"
                                disabled={!(isValid && dirty)}
                                onClick={handleSubmit}
                                size={"large"}
                                icon={"right"}
                                variant={"primary"}
                        >Sign Up</Button>
                        <ButtonRightArrow/>
                    </ButtonWrapper>
                </CustomForm>
            )}
        </Formik>
    );
};
export default SignUpForm;