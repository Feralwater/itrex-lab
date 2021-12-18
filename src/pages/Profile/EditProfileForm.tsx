import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import editProfileValidationSchema from './validation/editProfile.validation';
import { signUpFieldsData } from './editFormFieldsData';
import { EditForm } from './EditProfileForm.styles';
import {
  EditFormElements, EditImage, EditImageContainer, TitlePanel,
} from './Profile.styles';
import { ProfileButtonsBlock } from './ProfileButtonsBlock';
import { FormTitle } from '../../components/AuthForms/AuthForm.styles';
import pagesDictionary from '../dictionary/pagesDictionary';
import { PATH } from '../../routes/constants';
import { FETCH_STATUS } from '../../redux/reducers/constants';
import { EditProfileFormProps } from './EditProfile.types';

export const EditProfileForm: React.VFC<EditProfileFormProps> = ({
  handleSubmitForm,
  status,
  initialValues,
  profilePhoto,
}) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmitForm(values);
        if (status !== FETCH_STATUS.FAILED) {
          history.push(PATH.PROFILE);
        }
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
            <ProfileButtonsBlock status={status} isValid={isValid} dirty={dirty} />
          </TitlePanel>
          <EditFormElements>
            <EditImageContainer profilePhoto={profilePhoto}>
              <EditImage
                id="avatar"
                name="avatar"
                type="file"
                onChange={(event) => {
                  if (event.target.files) {
                    setFieldValue('avatar', event.target.files[0]);
                  }
                }}
              />
            </EditImageContainer>
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
          </EditFormElements>
        </EditForm>
      )}
    </Formik>
  );
};
