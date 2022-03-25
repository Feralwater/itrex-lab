import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';
import { FormTitle } from 'components/AuthForms/AuthForm.styles';
import editProfileValidationSchema from './validation/editProfile.validation';
import { signUpFieldsData } from './editFormFieldsData';
import { EditForm } from './EditProfileForm.styles';
import {
  EditFormElements, EditImage, EditImageContainer, InputContainer, TitlePanel,
} from './Profile.styles';
import { ProfileButtonsBlock } from './ProfileButtonsBlock';
import { EditProfileFormProps } from './EditProfile.types';
import { dictionary as pagesDictionary } from '../dictionary/pagesDictionary';

export const EditProfileForm: React.VFC<EditProfileFormProps> = ({
  handleSubmitForm,
  status,
  initialValues,
  profilePhoto,
  closeEditModeHandler,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => {
      handleSubmitForm(values);
      actions.setSubmitting(false);
    }}
    validationSchema={editProfileValidationSchema}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue,
      isValid,
      dirty,
    }) => (
      <EditForm onSubmit={handleSubmit}>
        <TitlePanel>
          <FormTitle as="h1">{pagesDictionary.profile.pageTitle}</FormTitle>
          <ProfileButtonsBlock closeEditModeHandler={closeEditModeHandler} status={status} isValid={isValid} dirty={dirty} />
        </TitlePanel>
        <EditFormElements>
          <EditImageContainer profilePhoto={profilePhoto}>
            <EditImage
              id="photo"
              name="photo"
              type="file"
              onChange={(event) => {
                if (event.target.files) {
                  setFieldValue('photo', event.target.files[0]);
                }
              }}
            />
          </EditImageContainer>

          {signUpFieldsData.map((data) => (
            <InputContainer key={data.name}>
              <Field
                value={(values as FormikValues)[data.name]}
                isError={(touched as FormikTouched<FormikValues>)[data.name] && (errors as FormikErrors<FormikValues>)[data.name]}
                errorText={(errors as FormikErrors<FormikValues>)[data.name]}
                onBlur={handleBlur}
                onChange={handleChange}
                {...data}
              />
            </InputContainer>
          ))}
        </EditFormElements>
      </EditForm>
    )}
  </Formik>
);
