import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';
import { dictionary } from 'pages';
import { PATH } from 'routes/const';
import {
  CustomForm,
  CustomLink,
  FormTitle,
} from './AuthForm.styles';
import singInValidationSchema from './validation/singIn.validation';
import { signInFieldsData } from './fieldsData';
import { ButtonWithLoader } from '..';
import { signInInitial } from './constants';
import { SignInFormProps } from './Form.types';

export const SignInForm:React.VFC<SignInFormProps> = ({ status, handleSubmitForm }) => (
  <Formik
    initialValues={signInInitial}
    onSubmit={
         ({ email: userName, password }, actions) => {
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
      <CustomForm
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      >
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
        <ButtonWithLoader status={status} isValid={isValid} dirty={dirty}>{dictionary.form.signInTitle}</ButtonWithLoader>
        <CustomLink to={PATH.RESTORE_PASSWORD}>{dictionary.form.forgotLinkText}</CustomLink>
      </CustomForm>
    )}
  </Formik>
);
