import {
  Formik, Field, FormikValues, FormikTouched, FormikErrors,
} from 'formik';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import editProfileValidationSchema from './validation/signUp.validation';
import { signUpFieldsData } from './editFormFieldsData';
import { editProfile } from '../../redux/actions';
import { EditProfileData, EditProfileFormProps } from './EditProfile.types';
import { EditForm } from './EditProfileForm.styles';
import { EditImage, EditImageContainer } from './Profile.styles';

export const EditProfileForm: React.VFC<EditProfileFormProps> = ({ profilePhoto }) => {
  const dispatch = useAppDispatch();

  const handleSubmitForm = async (values: EditProfileData) => {
    dispatch(editProfile.pending({
      firstName: values.firstName,
      lastName: values.lastName,
      avatar: values.avatar,
    }));
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        avatar: undefined,
      }}
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
      }) => (
        <EditForm onSubmit={handleSubmit}>
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
          <button type="submit">submit</button>
        </EditForm>
      )}
    </Formik>
  );
};
