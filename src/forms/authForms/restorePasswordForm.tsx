import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import {
  ButtonWrapper,
  CustomErrorMessage,
  CustomField,
  CustomForm, FormTitle, FormTitleLeftArrow,
  InputEmailContainer, RestoreMessage,
} from './authForm.styles';
import Button from '../../components/Button/Button';
import dictionary from '../../dictionary/dictionary';
import authValidationSchema from './auth.validation';

type Values = {
    email: string
}

const RestorePasswordForm = () => (
  <Formik
    initialValues={{
      email: '',
    }}
    onSubmit={(
      values: Values,
      { setSubmitting }: FormikHelpers<Values>,
    ) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
    validateOnBlur
    validationSchema={authValidationSchema}
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
        <FormTitle as={Link} to="/sign-in">
          <FormTitleLeftArrow />
          {dictionary.form.restoreTitle}
        </FormTitle>
        <RestoreMessage>
          {dictionary.form.restoreMessage}
        </RestoreMessage>
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
        <ButtonWrapper>
          <Button
            type="submit"
            disabled={!(isValid && dirty)}
            onClick={handleSubmit}
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

export default RestorePasswordForm;
