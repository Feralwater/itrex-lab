import { Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ButtonWrapper,
  InputConfirmPasswordContainer,
  InputEmailContainer,
  InputNameContainer,
  InputPasswordContainer,
  InputPasswordIcon,
  CustomForm,
  CustomField,
  CustomErrorMessage,
  FormTitle,
} from './authForm.styles';
import Button from '../../components/Button/Button';
import { PATH } from '../../routes/Routes';
import signUpValidationSchema from './validation/signUp.validation';
import { useAppDispatch } from '../../hooks';
import { registration } from '../../redux/actions/registration.actions';

type Values = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

const SignUpForm = () => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(false);
  const [isSecureConfirmPassword, setIsSecureConfirmPassword] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={
        async ({
          email: userName, password, firstName, lastName,
        }:Values, actions) => {
          try {
            dispatch(registration.pending({
              userName, password, firstName, lastName,
            }));
            history.push(PATH.APPOINTMENTS);
            actions.setSubmitting(false);
          } catch (e) {
            // @ts-ignore
            alert(e.message);
          }
        }
}
      validateOnBlur
      validationSchema={signUpValidationSchema}
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
      }) => (
        <CustomForm>
          <FormTitle as="h1">Sign Up</FormTitle>
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
            {touched.firstName && errors.firstName
                        && <CustomErrorMessage name="firstName" component="span" />}
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
            {touched.lastName && errors.lastName
                        && <CustomErrorMessage name="lastName" component="span" />}
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
            {touched.email && errors.email
                        && <CustomErrorMessage component="span" name="email" />}
          </InputEmailContainer>
          <InputPasswordContainer>
            <CustomField
              isError={touched.password && errors.password}
              name="password"
              placeholder="Password"
              type={!isSecurePassword ? 'password' : 'text'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <InputPasswordIcon
              isVisible={isSecurePassword}
              onClick={() => setIsSecurePassword((prev) => !prev)}
            />
            {touched.password && errors.password
                        && <CustomErrorMessage component="span" name="password" />}
          </InputPasswordContainer>
          <InputConfirmPasswordContainer>
            <CustomField
              isError={touched.confirmPassword && errors.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              type={!isSecureConfirmPassword ? 'password' : 'text'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <InputPasswordIcon
              isVisible={isSecureConfirmPassword}
              onClick={() => setIsSecureConfirmPassword((prev) => !prev)}
            />
            {touched.confirmPassword && errors.confirmPassword
                        && <CustomErrorMessage component="span" name="confirmPassword" />}
          </InputConfirmPasswordContainer>
          <ButtonWrapper>
            <Button
              type="submit"
              disabled={!(isValid && dirty)}
              onClick={handleSubmit}
              size="large"
              icon="right"
              variant="primary"
            >
              Sign Up
            </Button>
          </ButtonWrapper>
        </CustomForm>
      )}
    </Formik>
  );
};
export default SignUpForm;
