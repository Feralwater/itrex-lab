import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import {
  ButtonRightArrow,
  ButtonWrapper,
  CustomErrorMessage,
  CustomField,
  CustomForm, FormTitle, FormTitleLeftArrow,
  InputEmailContainer, RestoreMessage,
} from './Form.styles';
import Button from '../components/Button/Button';
import validationSchema from './validationSchema';
import dictionary from '../dictionary/dictionary';

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
    validationSchema={validationSchema}
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
          <ButtonRightArrow />
        </ButtonWrapper>
      </CustomForm>
    )}
  </Formik>
);

export default RestorePasswordForm;
