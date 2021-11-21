import { Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ButtonWrapper,
  CustomErrorMessage,
  CustomField,
  CustomForm,
  CustomLink,
  FormTitle,
  InputEmailContainer,
  InputPasswordContainer,
  InputPasswordIcon,
} from './authForm.styles';
import Button from '../../components/Button/Button';
import { PATH } from '../../routes/Routes';
import auth from '../../resources/auth/auth.api';
import dictionary from '../../dictionary/dictionary';
import singInValidationSchema from './validation/singIn.validation';
import { addProfileData } from '../../redux/reducers/profileReducer';

type Values = {
    email: string
    password: string
}

const SignInForm = () => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={
        async ({
          email: userName, password,
        }:Values, actions) => {
          try {
            const signInResponse = await auth.SignIn({
              userName, password,
            });
            localStorage.setItem('access_token', signInResponse.data.access_token);
            localStorage.setItem('refresh_token', signInResponse.data.refresh_token);
            const profileDataResponse = await auth.getProfile();
            dispatch(addProfileData(profileDataResponse.data));
            history.push(PATH.APPOINTMENTS);
            actions.setSubmitting(false);
          } catch (e) {
            // @ts-ignore
            alert(e.message);
          }
        }
      }
      validateOnBlur
      validationSchema={singInValidationSchema}
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
          <FormTitle as="h1">Sign In</FormTitle>
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
              type={isSecurePassword ? 'password' : 'text'}
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
          <ButtonWrapper>
            <Button
              type="submit"
              disabled={!(isValid && dirty)}
              onClick={handleSubmit}
              size="large"
              icon="right"
              variant="primary"
            >
              Sign in
            </Button>
          </ButtonWrapper>
          <CustomLink to="/restore-password">{dictionary.form.forgotLinkText}</CustomLink>
        </CustomForm>
      )}
    </Formik>
  );
};

export default SignInForm;
