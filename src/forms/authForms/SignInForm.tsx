import { Formik, Field } from 'formik';
import React, { useCallback } from 'react';

import {
  ButtonWrapper,
  CustomForm,
  CustomLink,
  FormTitle,
} from './authForm.styles';
import Button from '../../components/Button/Button';
import dictionary from '../../dictionary/dictionary';
import { useAppDispatch } from '../../hooks';
import { login } from '../../redux/actions/login.actions';
import singInValidationSchema from './validation/singIn.validation';
import { SignInValues } from './form.types';
import signInFieldsData from './fieldsData';
import { PATH } from '../../routes/constants';

const SignInForm:React.VFC = () => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = useCallback(({ userName, password }) => {
    dispatch(login.pending({ userName, password }));
  }, [dispatch]);

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
              value={values.email}
              // @ts-ignore
              isError={touched[data.name] && errors[data.name]}
              // @ts-ignore
              errorText={errors[data.name]}
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
