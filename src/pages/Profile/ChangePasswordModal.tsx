import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import { CustomForm, FormTitle } from '../../components/AuthForms/AuthForm.styles';
import dictionary from '../dictionary/pagesDictionary';
import { ResolutionModalButtons } from '../../components';
import { changePasswordFieldsData, changePasswordInitial } from './constants';
import { useAppDispatch } from '../../hooks';
import { ChangePasswordProps } from './EditProfile.types';
import { changePassword } from '../../redux/actions';
import { ChangePasswordPending } from '../../redux/actions/actions.types';
import changePasswordValidationSchema from './validation/changePassword.validation';

const ChangePasswordModal:React.VFC<ChangePasswordProps> = ({ setActiveChangePasswordModal }) => {
  const cancelHandler = () => setActiveChangePasswordModal(false);
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({ oldPassword, newPassword }:ChangePasswordPending) => {
    dispatch(changePassword.pending({ oldPassword, newPassword }));
  };
  return (
    <Formik
      initialValues={changePasswordInitial}
      onSubmit={
          ({ oldPassword, newPassword }, actions) => {
            handleSubmitForm({ oldPassword, newPassword });
            actions.setSubmitting(false);
          }
        }
      validationSchema={changePasswordValidationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <CustomForm onSubmit={handleSubmit}>
          <FormTitle as="h3">{dictionary.form.changePasswordTitle}</FormTitle>
          {changePasswordFieldsData.map((data) => (
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
          <ResolutionModalButtons
            activeButtonType="submit"
            cancelHandler={cancelHandler}
            passiveButtonText={dictionary.resolutionModal.cancelButtonText}
            activeButtonText={dictionary.resolutionModal.saveButtonText}
            activeButtonIcon="/svg/save-icon.svg"
            passiveButtonIcon="/svg/close-icon.svg"
            saveHandler={handleSubmit}
          />
        </CustomForm>
      )}
    </Formik>
  );
};

export default ChangePasswordModal;
