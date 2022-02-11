import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { editProfileSlice, selectEditProfile } from 'redux/reducers/editProfile.reducer';
import { selectProfile } from 'redux/reducers';
import { EditProfileForm } from './EditProfileForm';
import { EditProfileData, EditProfileFormContainerProps } from './EditProfile.types';

export const EditProfileFormContainer:React.VFC<EditProfileFormContainerProps> = ({ closeEditModeHandler }) => {
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
    closeEditModeHandler();
  };
  const editProfileFormInitialValues = {
    firstName: newFirstName || firstName,
    lastName: newLastName || lastName,
    avatar: '',
  };
  const profilePhoto = newPhoto || photo;

  return (
    <EditProfileForm
      closeEditModeHandler={closeEditModeHandler}
      handleSubmitForm={handleSubmitForm}
      status={fetchStatus}
      initialValues={editProfileFormInitialValues}
      profilePhoto={profilePhoto}
    />
  );
};
