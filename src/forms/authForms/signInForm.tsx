import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import dictionary from '../../dictionary/dictionary';
import singInValidationSchema from './validation/singIn.validation';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../redux/actions/login.actions';

type Values = {
    email: string
    password: string
}

export const checkUserRole = (history:any, userRoleName:string) => {
  switch (userRoleName) {
    case 'Patient':
      history.push(PATH.APPOINTMENTS);
      break;
    case 'Doctor':
      history.push(PATH.PATIENTS);
      break;
    default:
      break;
  }
};

const SignInForm = () => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);
  const token = useAppSelector((state) => state.login.accessToken);
  const roleName = useAppSelector((state) => state.login.role_name);
  const history = useHistory();
  useEffect(() => {
    checkUserRole(history, roleName);
  }, [roleName]);
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
            dispatch(login.me({ token }));
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
