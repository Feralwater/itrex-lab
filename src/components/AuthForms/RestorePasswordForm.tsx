import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import { Link, useHistory } from 'react-router-dom';
import {
  ButtonWrapper,
  CustomForm, FormTitle, FormTitleLeftArrow,
  RestoreMessage,
} from './AuthForm.styles';
import { Button } from '../Button';
import dictionary from '../../pages/dictionary/pagesDictionary';
import restorePasswordValidationSchema from './validation/restorePassword.validation';
import { PATH } from '../../routes/constants';
import { restoreFieldsData } from './fieldsData';
import { RestoreEmail } from './Form.types';

export const RestorePasswordForm:React.VFC<RestoreEmail> = ({ setRestorePassword }) => {
  const history = useHistory();
  const handleSubmitForm = (email:string) => {
    setRestorePassword(email);
    history.push(PATH.SEND_EMAIL);
  };
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={({ email }, actions) => {
        handleSubmitForm(email);
        actions.setSubmitting(false);
      }}
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
