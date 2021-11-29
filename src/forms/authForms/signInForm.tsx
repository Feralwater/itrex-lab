import { Formik } from 'formik';
import React, { useState } from 'react';
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
import dictionary from '../../dictionary/dictionary';
import { useAppDispatch } from '../../hooks';
import { login } from '../../redux/actions/login.actions';
import singInValidationSchema from './validation/singIn.validation';

type Values = {
    email: string
    password: string
}

const SignInForm = () => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);

  const dispatch = useAppDispatch();
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
            dispatch(login.pending({ userName, password }));
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
          <FormTitle as="h1">{dictionary.form.signInTitle}</FormTitle>
          <InputEmailContainer>
            <CustomField
              error={touched.email && errors.email}
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
              error={touched.password && errors.password}
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
              {dictionary.form.signInTitle}
            </Button>
          </ButtonWrapper>
          <CustomLink to="/restore-password">{dictionary.form.forgotLinkText}</CustomLink>
        </CustomForm>
      )}
    </Formik>
  );
};

export default SignInForm;
