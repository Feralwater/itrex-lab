import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';

import {
  ButtonWrapper,
  CustomForm,
  CustomLink,
  FormTitle,
} from './AuthForm.styles';
import Button from '../../../components/Button/Button';
import dictionary from '../../dictionary/pagesDictionary';
import { useAppDispatch } from '../../../hooks';
import login from '../../../redux/actions/login.actions';
import singInValidationSchema from './validation/singIn.validation';
import { SignInValues } from './Form.types';
import { signInFieldsData } from './fieldsData';
import { PATH } from '../../../routes/constants';
import { SignInData } from '../../../resources/auth/auth.types';

const SignInForm:React.VFC = () => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({ userName, password } : SignInData) => {
    dispatch(login.pending({ userName, password }));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={
         ({ email: userName, password }:SignInValues, actions) => {
           handleSubmitForm({ userName, password });
           actions.setSubmitting(false);
         }
      }
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
        <CustomForm onSubmit={handleSubmit}>
          <FormTitle as="h1">{dictionary.form.signInTitle}</FormTitle>
          {signInFieldsData.map((data) => (
            <Field
              key={data.name}
              value={(values as FormikValues)[data.name]}
              isError={(touched as FormikTouched<FormikValues>)[data.name] && (errors as FormikErrors<FormikValues>)[data.name]}
              errorText={(errors as FormikErrors<FormikValues>)[data.name]}
              onBlur={handleBlur}
              onChange={handleChange}
              {...data}
            />
          ))}
          <ButtonWrapper>
            <Button
              type="submit"
              disabled={!(isValid && dirty)}
              size="large"
              icon="right"
              variant="primary"
            >
              {dictionary.form.signInTitle}
            </Button>
          </ButtonWrapper>
          <CustomLink to={PATH.RESTORE_PASSWORD}>{dictionary.form.forgotLinkText}</CustomLink>
        </CustomForm>
      )}
    </Formik>
  );
};

export default SignInForm;
