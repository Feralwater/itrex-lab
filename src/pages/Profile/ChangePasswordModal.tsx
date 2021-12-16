import React from 'react';
import {
  Field, Formik, FormikErrors, FormikTouched, FormikValues,
} from 'formik';
import { ResolutionModalTitle } from 'components/ControlCardPanel/ControlCardPanel.styles';
import dictionary from '../dictionary/pagesDictionary';
import { ResolutionModalButtons } from '../../components';
import { changePasswordFieldsData, changePasswordInitial } from './constants';
import { useAppDispatch } from '../../hooks';
import { ChangePasswordProps } from './EditProfile.types';
import { changePassword } from '../../redux/actions';
import { ChangePasswordPending } from '../../redux/actions/actions.types';
import changePasswordValidationSchema from './validation/changePassword.validation';
import { ChangePasswordForm, ChangePasswordFormBody } from './ChangePassword.styles';

const ChangePasswordModal: React.VFC<ChangePasswordProps> = ({ setActiveChangePasswordModal }) => {
  const dispatch = useAppDispatch();
  const handleSubmitForm = ({
    oldPassword,
    newPassword,
  }: ChangePasswordPending) => {
    dispatch(changePassword.pending({
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
      }) => (
        <ChangePasswordForm onSubmit={handleSubmit}>
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
            activeButtonType="submit"
            cancelHandler={() => {
              setActiveChangePasswordModal(false);
              handleReset();
            }}
            passiveButtonText={dictionary.resolutionModal.cancelButtonText}
            activeButtonText={dictionary.resolutionModal.saveButtonText}
            activeButtonIcon="/svg/save-icon.svg"
            passiveButtonIcon="/svg/close-icon.svg"
            saveHandler={handleSubmit}
          />
        </ChangePasswordForm>
      )}
    </Formik>
  );
};

export default ChangePasswordModal;
