import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import editProfileValidationSchema from './validation/signUp.validation';
import { signUpFieldsData } from './editFormFieldsData';
import { editProfile } from '../../redux/actions';
import { EditProfileData } from './EditProfile.types';
import { EditForm } from './EditProfileForm.styles';
import {
  EditFormElements, EditImage, EditImageContainer, TitlePanel,
} from './Profile.styles';
import { ProfileButtonsBlock } from './ProfileButtonsBlock';
import { FormTitle } from '../../components/AuthForms/AuthForm.styles';
import pagesDictionary from '../dictionary/pagesDictionary';
import { selectProfile } from '../../redux/reducers';
import { EditProfileInitial } from './constants';
import { selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { PATH } from '../../routes/constants';

export const EditProfileForm: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(selectEditProfile);
  const { photo: profilePhoto } = useAppSelector(selectProfile);
  const history = useHistory();

  const handleSubmitForm = (values: EditProfileData) => {
    dispatch(editProfile.pending({
      firstName: values.firstName,
      lastName: values.lastName,
      avatar: values.avatar,
    }));
    if (status !== 'failed') {
      history.push(PATH.PROFILE);
    }
  };

  return (
    <Formik
      initialValues={EditProfileInitial}
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
            <ProfileButtonsBlock status={status} isValid={isValid} dirty={dirty} />
          </TitlePanel>
          <EditFormElements>
            <EditImageContainer profilePhoto={profilePhoto}>
              <EditImage
                id="avatar"
                name="avatar"
                type="file"
                onChange={(event) => {
                  if (event.currentTarget.files) {
                    setFieldValue('avatar', event.currentTarget.files[0]);
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
