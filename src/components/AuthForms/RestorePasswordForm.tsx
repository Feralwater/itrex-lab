import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { dictionary } from 'pages';
import { PATH } from 'routes/constants';
import {
  ButtonWrapper,
  CustomForm, FormTitle, FormTitleLeftArrow,
  RestoreMessage,
} from './AuthForm.styles';
import { Button } from '../Button';
import restorePasswordValidationSchema from './validation/restorePassword.validation';
import { restoreFieldsData } from './fieldsData';

export const RestorePasswordForm:React.VFC = () => {
  const navigate = useNavigate();
  const handleSubmitForm = () => navigate(PATH.SEND_EMAIL);
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={handleSubmitForm}
      validationSchema={restorePasswordValidationSchema}
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
          <FormTitle as={Link} to={PATH.SIGN_IN}>
            <FormTitleLeftArrow />
            {dictionary.form.restoreTitle}
          </FormTitle>
          <RestoreMessage>{dictionary.form.restoreMessage}</RestoreMessage>
          {restoreFieldsData.map((data) => (
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
              icon="right"
              size="large"
              variant="primary"
            >
              {dictionary.form.resetLinkText}
            </Button>
          </ButtonWrapper>
        </CustomForm>
      )}
    </Formik>
  );
};
