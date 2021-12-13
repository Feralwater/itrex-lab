import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';
import {
  CustomForm,
  CustomLink,
  FormTitle,
} from './AuthForm.styles';
import dictionary from '../../pages/dictionary/pagesDictionary';
import { useAppDispatch, useAppSelector } from '../../hooks';
import login from '../../redux/actions/login.actions';
import singInValidationSchema from './validation/singIn.validation';
import { SignInValues } from './Form.types';
import { signInFieldsData } from './fieldsData';
import { PATH } from '../../routes/constants';
import { SignInData } from '../../resources/auth/auth.types';
import { ButtonWithLoader } from '..';
import { selectProfile } from '../../redux/reducers';

export const SignInForm:React.VFC = () => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({ userName, password } : SignInData) => {
    dispatch(login.pending({ userName, password }));
  };
  const { status } = useAppSelector(selectProfile);
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
          <ButtonWithLoader status={status} isValid={isValid} dirty={dirty}>{dictionary.form.signUpTitle}</ButtonWithLoader>
          <CustomLink to={PATH.RESTORE_PASSWORD}>{dictionary.form.forgotLinkText}</CustomLink>
        </CustomForm>
      )}
    </Formik>
  );
};
