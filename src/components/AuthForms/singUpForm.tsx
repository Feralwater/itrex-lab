import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import { PATH } from '../../routes/constants';
import signUpValidationSchema from './validation/signUp.validation';
import { useAppDispatch } from '../../hooks';
import registration from '../../redux/actions/registration.actions';
import { SignUpValues } from './Form.types';
import { ButtonWrapper, CustomForm, FormTitle } from './AuthForm.styles';
import { signUpFieldsData } from './fieldsData';
import dictionary from '../../pages/dictionary/pagesDictionary';
import { SignUpData } from '../../resources/auth/auth.types';

const SignUpForm:React.VFC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({
    userName, password, firstName, lastName,
  }: SignUpData) => {
    dispatch(registration.pending({
      userName, password, firstName, lastName,
    }));
    history.push(PATH.APPOINTMENTS);
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
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
        <CustomForm onSubmit={handleSubmit}>
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
};
export default SignUpForm;
