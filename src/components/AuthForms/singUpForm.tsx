import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import React from 'react';
import { dictionary } from 'pages';
import { Button } from '../Button';
import signUpValidationSchema from './validation/signUp.validation';
import { SignUpFormProps, SignUpValues } from './Form.types';
import { ButtonWrapper, CustomForm, FormTitle } from './AuthForm.styles';
import { signUpFieldsData } from './fieldsData';
import { signUpInitial } from './constants';

export const SignUpForm:React.VFC<SignUpFormProps> = ({ handleSubmitForm }) => (
  <Formik
    initialValues={signUpInitial}
    onSubmit={({
      email: userName, password, firstName, lastName,
    }:SignUpValues, actions) => {
      handleSubmitForm({
        userName, password, firstName, lastName,
      });
      actions.setSubmitting(false);
    }}
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
      <CustomForm
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      >
        <FormTitle as="h1">{dictionary.form.signUpTitle}</FormTitle>
        {signUpFieldsData.map((data) => (
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
            {dictionary.form.signUpTitle}
          </Button>
        </ButtonWrapper>
      </CustomForm>
    )}
  </Formik>
);
