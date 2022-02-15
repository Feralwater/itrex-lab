import React from 'react';
import { EditProfileForm } from './EditProfileForm';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { editProfileSlice, selectEditProfile } from '../../redux/reducers/editProfile.reducer';
import { selectProfile } from '../../redux/reducers';
import { EditProfileData } from './EditProfile.types';

export const EditProfileFormContainer:React.VFC = () => {
  const dispatch = useAppDispatch();
  const {
    status: fetchStatus, lastName: newLastName, firstName: newFirstName, photo: newPhoto,
  } = useAppSelector(selectEditProfile);
  const { photo, firstName, lastName } = useAppSelector(selectProfile);
  const handleSubmitForm = (values: EditProfileData) => {
    const data = new FormData();
    data.append('firstName', values.firstName);
    data.append('lastName', values.lastName);
    data.append('avatar', values.avatar);
    dispatch(editProfileSlice.actions.pending(data));
  };
  const editProfileFormInitialValues = {
    firstName: newFirstName || firstName,
    lastName: newLastName || lastName,
    avatar: '',
  };
  const profilePhoto = newPhoto || photo;

  return (
    <EditProfileForm
      handleSubmitForm={handleSubmitForm}
      status={fetchStatus}
      initialValues={editProfileFormInitialValues}
      profilePhoto={profilePhoto}
    />
  );
};
