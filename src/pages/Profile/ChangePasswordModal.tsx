import React, { forwardRef } from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import { ResolutionModalTitle } from 'components/ControlCardPanel/ControlCardPanel.styles';
import { ResolutionModalButtons } from 'components';
import { useAppDispatch } from 'hooks';
import { ChangePasswordPending } from 'redux/actions.types';
import { changePasswordSlice } from 'redux/reducers/changePassword.reducer';
import { dictionary } from '../dictionary/pagesDictionary';
import { changePasswordFieldsData, changePasswordInitial } from './constants';
import { ChangePasswordProps } from './EditProfile.types';
import changePasswordValidationSchema from './validation/changePassword.validation';
import { ChangePasswordForm, ChangePasswordFormBody } from './ChangePassword.styles';

export const ChangePasswordModal: React.VFC<ChangePasswordProps> = forwardRef((props, ref) => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({
    oldPassword,
    newPassword,
  }: ChangePasswordPending) => {
    dispatch(changePasswordSlice.actions.pending({
      oldPassword,
      newPassword,
    }));
  };
  return (
    <Formik
      initialValues={changePasswordInitial}
      onSubmit={
        ({
          oldPassword,
          newPassword,
        }, actions) => {
          handleSubmitForm({
            oldPassword,
            newPassword,
          });
          actions.resetForm();
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
        handleReset,
        isValid,
        dirty,
      }) => (
        <ChangePasswordForm
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
              ref.current.close();
            }
          }}
        >
          <ChangePasswordFormBody>
            <ResolutionModalTitle>{dictionary.form.changePasswordTitle}</ResolutionModalTitle>
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
          </ChangePasswordFormBody>
          <ResolutionModalButtons
            disabled={!(isValid && dirty)}
            activeButtonType="submit"
            cancelHandler={() => {
              ref.current.close();
              handleReset();
            }}
            passiveButtonText={dictionary.resolutionModal.cancelButtonText}
            activeButtonText={dictionary.resolutionModal.saveButtonText}
            activeButtonIcon="/svg/save-icon.svg"
            passiveButtonIcon="/svg/close-icon.svg"
            saveHandler={() => ref.current.close()}
          />
        </ChangePasswordForm>
      )}
    </Formik>
  );
});
