import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import { Link, useHistory } from 'react-router-dom';
import {
  ButtonWrapper,
  CustomForm, FormTitle, FormTitleLeftArrow,
  RestoreMessage,
} from './authForm.styles';
import Button from '../../components/Button/Button';
import dictionary from '../../dictionary/dictionary';
import { RestoreValues } from './form.types';
import restorePasswordValidationSchema from './validation/restorePassword.validation';
import { PATH } from '../../routes/constants';
import { restoreFieldsData } from './fieldsData';

const RestorePasswordForm:React.VFC = () => {
  const history = useHistory();
  const handleSubmitForm = () => {
    history.push(PATH.SEND_EMAIL);
  };
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={(
        values: RestoreValues,
        actions,
      ) => {
        handleSubmitForm();
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
        <CustomForm onSubmit={handleSubmit}>
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

export default RestorePasswordForm;
